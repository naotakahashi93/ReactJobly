<img src="./DB%20design.png"></img>


    <App>
       -- state:
          - const [user, setUser] = useState(true);
       -- login function to setUser()
       -- logout function to setUser() and clear 
      <NavBar/>
        -- props: logout function 
      <Routes>
        -- state:
            - const [companies, setCompanies] = useState([]);
            - const [jobs, setJobs] = useState([]);
        <Switch>
            <Route exact path="/">
                <Home/> ----- Homepage — just a simple welcome message
            </Route>

            <Route exact path="/companies">
                <Companies/> ----- List all companies
                    -- state:
                    - const [filteredCompanies, setFilteredCompanies] =useState({})
                    - const [error, setError] = useState()
                    <CompanyCard/>  
            </Route>

            <Route exact path="/companies/:compid">
                <CompanyDetails/> ----- View details of this company 
            </Route>

            <Route exact path="/jobs">
                <Jobs /> ----- List all jobs
                    <JobCard/>
            </Route>

            <Route exact path="/login">
                <Login/> ----- Login/signup page
                    --props: login function 
            </Route>

            <Route exact path="/signup">
                <SignupForm/> ----- Signup form
                    --props: login function 
            </Route>

            <Route exact path="/profile">
                <Profile /> ----- Edit profile page
            </Route>

        </Switch>
      </Routes>