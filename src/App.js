import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faSlackHash,
} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              class="bi bi-bootstrap-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"
              />
            </svg>
          </a>

          <div class="collapse navbar-collapse navbar">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Documentation
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Icon
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  Template
                </a>
              </li>
            </ul>
          </div>

          <form class="form-inline my-2 my-lg-0 ">
            <button
              class="input-group-text btn btn-outline-dark my-2 my-sm-0"
              type="submit"
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                class="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>

          <div class="collapse navbar-collapse navbar  pl-5 ">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link dropdown-toggle" href="#">
                  V4.3
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faSlackHash} />
                </a>
              </li>
              <li class="nav-item ">
                <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
                  Sign up
                </button>
              </li>
              <li class="nav-item ">
                <button
                  class="btn btn-outline-dark my-2 mx-2 my-sm-0"
                  type="submit"
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section id="Form">
        <div class="container">
          <div class="row d-flex justify-content-center my-5">
            <div class="card bg-aqua w-25 h-100">
              <div class="card-header text-center">
                <svg
                  width="4em"
                  height="4em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                  <path
                    fill-rule="evenodd"
                    d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  />
                </svg>
                <h5 class="card-title my-3">Sign up</h5>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="firstNameInput"> First Name</label>
                      <input
                        type="Text"
                        name=""
                        id="firstNameInput"
                        placeholder="Votre Prenom.."
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="lastNameInput"> Last Name</label>
                      <input
                        type="Text"
                        name=""
                        id="lastNameInput"
                        placeholder="Votre Nom..."
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group">
                      <label for="mailInput"> E-mail</label>
                      <input
                        type="email"
                        name=""
                        id="mailInput"
                        placeholder="Your Email..."
                      />
                    </div>
                  </div>
                  <div class="form-row">
                    <button type="submit" class="btn btn-dark">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
