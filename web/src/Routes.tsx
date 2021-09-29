// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import IntegrationsLayout from 'src/layouts/Dev/IntegrationsLayout'
import AchievementsLayout from 'src/layouts/Dev/AchievementsLayout'
import UsersLayout from 'src/layouts/Dev/UsersLayout'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={IntegrationsLayout}>
        <Route path="/dev/integrations/new" page={DevIntegrationNewIntegrationPage} name="devNewIntegration" />
        <Route path="/dev/integrations/{id}/edit" page={DevIntegrationEditIntegrationPage} name="devEditIntegration" />
        <Route path="/dev/integrations/{id}" page={DevIntegrationIntegrationPage} name="devIntegration" />
        <Route path="/dev/integrations" page={DevIntegrationIntegrationsPage} name="devIntegrations" />
      </Set>
      <Set wrap={AchievementsLayout}>
        <Route path="/dev/achievements/new" page={DevAchievementNewAchievementPage} name="devNewAchievement" />
        <Route path="/dev/achievements/{id}/edit" page={DevAchievementEditAchievementPage} name="devEditAchievement" />
        <Route path="/dev/achievements/{id}" page={DevAchievementAchievementPage} name="devAchievement" />
        <Route path="/dev/achievements" page={DevAchievementAchievementsPage} name="devAchievements" />
      </Set>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/dev/users/new" page={DevUserNewUserPage} name="devNewUser" />
        <Route path="/dev/users/{id}/edit" page={DevUserEditUserPage} name="devEditUser" />
        <Route path="/dev/users/{id}" page={DevUserUserPage} name="devUser" />
        <Route path="/dev/users" page={DevUserUsersPage} name="devUsers" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
