class ReportsPage {
  constructor(page) {
    this.page = page;
    this.pimTab = '//a[normalize-space()="PIM"][@class="oxd-main-menu-item"]';
    this.reportsTab = '//a[normalize-space()="Reports"][@class="oxd-topbar-body-nav-tab-item"]';
    this.employeeReportsHeader = 'div.oxd-table-filter';  // "Employee Reports"
    this.searchBox = 'input[placeholder="Type for hints..."]';
    this.searchBtn = 'button[type="submit"]';
    this.recordText = '//div[@class="orangehrm-horizontal-padding orangehrm-vertical-padding"]//span[@class="oxd-text oxd-text--span"]'; // "1 record found"
    this.reportIcon = '//i[@class="oxd-icon bi-file-text-fill"]';
    this.reportViewPage ='//div//h6[normalize-space()="All Employee Sub Unit Hierarchy Report"]';
  }

   async navigateToPimTab() {
     await this.page.click(this.pimTab);
 
   }

  async navigateToReports() {
  await this.page.waitForSelector(this.reportsTab, { state: 'visible' , timeout: 30000}); 
  await this.page.click(this.reportsTab);
}


  async validateEmployeeReports() {
    return await this.page.textContent(this.employeeReportsHeader);
  }

  async searchReport(reportName) {
    await this.page.fill(this.searchBox, reportName);
    await this.page.getByRole('option', { name: 'All Employee Sub Unit' }).locator('span').click()
    // await this.page.keyboard.press('ArrowDown');
    // await this.page.keyboard.press('Enter');
    await this.page.click(this.searchBtn);
  }

  async getRecordText() {
    return await this.page.textContent(this.recordText , {timeout:3000});
  }
  async reportIconClick(){
    return await this.page.click(this.reportIcon);
    
  }
  async employeeReport(){
    return await this.page.waitForSelector(this.reportViewPage, { state: 'visible' , timeout: 30000});
}
}

module.exports = { ReportsPage };
