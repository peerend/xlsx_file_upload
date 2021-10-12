using Microsoft.AspNetCore.Mvc;
using excelToJSON.Models;
using excelToJSON.Code;
using System.Text.Json;

namespace excelToJSON.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class XlsUploadController : ControllerBase
    {

        private readonly ILogger<XlsUploadController> _logger;

        public XlsUploadController(ILogger<XlsUploadController> logger)
        {
            _logger = logger;
        }
      
        [HttpPost("uploadfile")]
        public async Task<DatagridJson> UploadFile([FromForm] IFormFile xlsFile)
        {
            var content = ExcelHelper.ReadExcelAsJSON(xlsFile);
            DatagridJson datagrid = new DatagridJson();
            datagrid.Rows = content;
            datagrid.Description = "My first datagrid package";
            return datagrid;
        }
    }
}