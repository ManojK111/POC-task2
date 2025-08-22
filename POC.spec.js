import { LoginPage } from "../Pages/LoginPage.spec";
import { test, expect } from '@playwright/test';
import { ReportsPage } from "../Pages/ReportPage.spec";


test ("Verifying report",async({page})=>{

    const loginPage = new LoginPage(page);
      const reportsPage = new ReportsPage(page);
    
      await loginPage.gotoLoginPage();
    
      await loginPage.login('Admin', 'admin123');
     //await page.pause();
      await reportsPage.navigateToPimTab();
    
      await reportsPage.navigateToReports();
 
      const headerText = await reportsPage.validateEmployeeReports();


      expect(headerText).toContain('Employee Reports');
  
      await reportsPage.searchReport('All Employee Sub Unit Hierarchy Report'); 
      //await this.page.getByRole('option', { name: 'All Employee Sub Unit' }).locator('span').click() 
      await page.waitForTimeout(6000);
      const recordText = await reportsPage.getRecordText();
      console.log(recordText);

      expect(recordText).toContain('(1) Record Found');
      
      await reportsPage.reportIconClick();

      const reportText= await reportsPage.employeeReport('All Employee Sub Unit Hierarchy Report');
      console.log(reportText);

});

