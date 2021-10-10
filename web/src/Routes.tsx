// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import RequirementsLayout from 'src/layouts/Dev/RequirementsLayout'
import EarnedAchievementsLayout from 'src/layouts/Dev/EarnedAchievementsLayout'
import IntegrationsLayout from 'src/layouts/Dev/IntegrationsLayout'
import AchievementsLayout from 'src/layouts/Dev/AchievementsLayout'
import UsersLayout from 'src/layouts/Dev/UsersLayout'
import DefaultLayout from 'src/layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={RequirementsLayout}>
        <Route path="/dev/requirements/new" page={DevRequirementNewRequirementPage} name="devNewRequirement" />
        <Route path="/dev/requirements/{id:Int}/edit" page={DevRequirementEditRequirementPage} name="devEditRequirement" />
        <Route path="/dev/requirements/{id:Int}" page={DevRequirementRequirementPage} name="devRequirement" />
        <Route path="/dev/requirements" page={DevRequirementRequirementsPage} name="devRequirements" />
      </Set>
      <Set wrap={EarnedAchievementsLayout}>
        <Route path="/dev/earned-achievements/new" page={DevEarnedAchievementNewEarnedAchievementPage} name="devNewEarnedAchievement" />
        <Route path="/dev/earned-achievements/{id:Int}/edit" page={DevEarnedAchievementEditEarnedAchievementPage} name="devEditEarnedAchievement" />
        <Route path="/dev/earned-achievements/{id:Int}" page={DevEarnedAchievementEarnedAchievementPage} name="devEarnedAchievement" />
        <Route path="/dev/earned-achievements" page={DevEarnedAchievementEarnedAchievementsPage} name="devEarnedAchievements" />
      </Set>
      <Set wrap={IntegrationsLayout}>
        <Route path="/dev/integrations/new" page={DevIntegrationNewIntegrationPage} name="devNewIntegration" />
        <Route path="/dev/integrations/{id:Int}/edit" page={DevIntegrationEditIntegrationPage} name="devEditIntegration" />
        <Route path="/dev/integrations/{id:Int}" page={DevIntegrationIntegrationPage} name="devIntegration" />
        <Route path="/dev/integrations" page={DevIntegrationIntegrationsPage} name="devIntegrations" />
      </Set>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/collection/{address}" page={CollectionPage} name="collection" />
        <Route path="/i/{id:Int}" page={IntegrationPage} name="integration" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/dev/users/new" page={DevUserNewUserPage} name="devNewUser" />
        <Route path="/dev/users/{id}/edit" page={DevUserEditUserPage} name="devEditUser" />
        <Route path="/dev/users/{id}" page={DevUserUserPage} name="devUser" />
        <Route path="/dev/users" page={DevUserUsersPage} name="devUsers" />
      </Set>
      <Set wrap={AchievementsLayout}>
        <Route path="/dev/achievements/new" page={DevAchievementNewAchievementPage} name="devNewAchievement" />
        <Route path="/dev/achievements/{id}/edit" page={DevAchievementEditAchievementPage} name="devEditAchievement" />
        <Route path="/dev/achievements/{id}" page={DevAchievementAchievementPage} name="devAchievement" />
        <Route path="/dev/achievements" page={DevAchievementAchievementsPage} name="devAchievements" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
