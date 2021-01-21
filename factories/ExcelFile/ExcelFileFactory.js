import exceljs from "exceljs";

export default class ExcelFileFactory {

    getFile(title, data) {
        const workbook = new exceljs.Workbook();
        workbook.views = [
            {
              x: 0, y: 0, width: 10000, height: 20000,
              firstSheet: 0, activeTab: 1, visibility: 'visible'
            }
          ];
        const reportTitle = `Grade Report for ${title} `
        const worksheet = workbook.addWorksheet(reportTitle);
        worksheet.columns = [
            { header: 'Student', key: 'name', },
            { header: 'Grade', key: 'grade' }
          ];
        data.map(student => {
            student.grade = student.grades
                            .sort((a,b) => a.date - b.date)
                            .pop().grade;
            return student;
        })
        worksheet.addRows(data);
        return workbook.xlsx;
    }
}