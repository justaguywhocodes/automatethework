import React, { useState, useEffect } from 'react'
import { Link } from 'next/link'

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
  })
  return (
    <div>
      { isLoading ?
        <div>
          <div className='profile-nav'>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
              <Link href='/users/profile'>
                <a className='navbar-brand text-center'>User Profile</a>
              </Link>

              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item'>
                    <Link href='/users/profile'>
                      <a className='nav-link'>User Profile</a>
                    </Link>
                  </li>
                  <li className='
                    nav-item'>
                    <Link
                      href='/users/profile/posts'>
                      <a className='nav-link'>Posts</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/users/profile/likes'>
                      <a className='nav-link'>Likes</a>
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link href='/users/profile/settings'>
                      <a className='nav-link'>Settings</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <div className='profile-header'>
              <div className='profile-info'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <div className='profile-pic'>
                        <div className='img-container'>
                          <img src='https://avatars0.githubusercontent.com/u/44698152?s=460&v=4' alt='User Profile Image' />
                        </div>
                      </div>
                    </div>
                    <div className='col-md-8'>
                      <div className='profile-desc'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='name'>
                                <h2>John Smith</h2>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='bio'>
                                <p>Hello, I'm John Smith, I'm a full-stack developer and I love to create amazing things on the web.</p>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='button-group'>
                                <Link href='#'>
                                  <a className='btn btn-primary'>Follow</a>
                                </Link>
                                <Link href='#'>
                                  <a className='btn btn-success'>Contact</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='profile-body'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='row'>
                      <div className='col-md-3'>
                        <div id='profile-stats'>
                          <div className='stat'>
                            <div className='stat-number'>65</div>
                            <div className='stat-title'>Posts</div>
                          </div>
                          <div className='stat'>
                            <div className='stat-number'>2398</div>
                            <div className='stat-title'>Likes</div>
                          </div>
                          <div className='stat'>
                            <div className='stat-number'>325</div>
                            <div className='stat-title'>Comments</div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-9'>
                        <div className='user-posts'>
                          <div className='post'>
                            <div>
                              <div className='img-container'>
                                <img src='https://cdn.pixabay.com/photo/2019/11/17/20/09/landscape-4629980_960_720.jpg' alt='User post Image' />
                                <div className='post-title'>Image Title</div>
                              </div>
                            </div>
                            <div className='post-meta'>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className='post-meta'>
                              <p>Likes: <span className='count'>65</span> | Comments: <span className='count'>23</span></p>
                            </div>
                          </div>
                          <div className='post'>
                            <div>
                              <div className='img-container'>
                                <img src='https://cdn.pixabay.com/photo/2019/11/17/20/09/landscape-4629980_960_720.jpg' alt='User post Image' />
                                <div className='post-title'>Image Title</div>
                              </div>
                            </div>
                            <div className='post-meta'>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className='post-meta'>
                              <p>Likes: <span className='count'>65</span> | Comments: <span className='count'>23</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='col-12 col-md-6'>
                  <div className='footer-links'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <ul className='list-inline'>
                          <li><Link href='/'>
                            <a>Home</a>
                          </Link></li>
                          <li><Link href='/about'>
                            <a>About</a>
                          </Link></li>
                          <li><Link href='/contact'>
                            <a>Contact</a>
                          </Link></li>
                        </ul>
                      </div>
                      <div className='col-md-6 text-md-right'>
                        <p className='copyright-text'>
                          Copyright &copy; 2022 FlowBite
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        : <div>Loading...</div> }
    </div>
  )
}

export default UserProfile