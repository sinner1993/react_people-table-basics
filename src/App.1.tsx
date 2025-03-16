import { NavLink, Outlet } from 'react-router-dom';
import { getActiveLink } from './App';
import { Loader } from './components/Loader';


export const App = () => (
  <div data-cy="app">
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getActiveLink}>
            Home
          </NavLink>

          <NavLink to="people" className={getActiveLink}>
            People
          </NavLink>
        </div>
      </div>
    </nav>

    <main className="section">
      <div className="container">
        <Outlet />
        <h1 className="title">People Page</h1>
        <div className="block">
          <div className="box table-container">
            <Loader />

            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>

            <p data-cy="noPeopleMessage">There are no people on the server</p>

            <table
              data-cy="peopleTable"
              className="table is-striped is-hoverable is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Born</th>
                  <th>Died</th>
                  <th>Mother</th>
                  <th>Father</th>
                </tr>
              </thead>

              <tbody>
                <tr data-cy="person">
                  <td>
                    <a href="#/people/jan-van-brussel-1714">Jan van Brussel</a>
                  </td>

                  <td>m</td>
                  <td>1714</td>
                  <td>1748</td>
                  <td>Joanna van Rooten</td>
                  <td>Jacobus van Brussel</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
);
