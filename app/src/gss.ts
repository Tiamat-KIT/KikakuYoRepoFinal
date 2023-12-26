import { GoogleSpreadsheet } from 'google-spreadsheet';
/* import { JWT } from 'google-auth-library'; */
const {JWT} = require("google-auth-library")

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/guides/authentication
export const TestModule = async() => {
    const serviceAccountAuth = new JWT({
        // env var values here are copied from service account credentials generated by google
        // see "Authentication" section in docs for more info
        email: "train-a145c@appspot.gserviceaccount.com",
        key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCOIAs8wgpV3quD\nwFmNyzMiVmFmkOSjhdexXdSCTlAXhWvkLIb70WInF6al6v/moDRCc6daP6ovPVdC\nGKrT1lTJJjnxaSGDlZ0TEk8FWaBFT8OiQe/CDNoYu/MB+BJQ1cszyz9LJtADqL2X\nlRQpTdllo4iydvJkAQOvCIQcY5SJS9RjzQU86K2FJvrS9PfGvMrlKi4TAkr6LtBa\nrDK9Y2MyhULO03RQZZ2By8oBw4wFXujcmxxpM1fRBjWqO/Wr1wPkScQ6+7ham0va\n/ectS0DnMzc8F1LJuaI1ECLzWfSLjpNtwcc7e2JUz9PZWfudJmbS8HxY+mtw2HJe\nYZAGm7h9AgMBAAECggEADcFDkfRHn5eznfmT0TmWyWtDW8CIvqi5jASd1T4/plJQ\nprfs5acvxClkuAJLFPNxS1mGtO3PcM+Teww76dEzyhBSI3wxjnSAfxpSnbZwYMGy\nmEJtMii5qayOMFhL0X+RF7V2es8whGiK1myxRrp7LUjxj5aCdZpBh7ZslS2WcEXk\nRDUf0lxHE1Qg+Jh6FafIQUIpu3Q9b1mS6LYccjlvsJC9nqP3R+o0yxCxeB52kTJq\nfXh5oHuO+q3gJaQtdEtr59hUjKgM+cQDr4pXmtjz3bioeWDphUfTpfB8IQXcAyCi\nk7t0y+MCR+eDoXoDdANeCQvnJJumdd2+iqXCnHbekwKBgQDCmttHYQcRWLTG5L65\ngKYoWy9c5l3KJFgjOWMeWYxc3DjpCk5hn0UUpQUmetkzxVzubRLRy7ftQWcvLgev\nYUl+XBwIYYXeUtpm40rl61BVn5C5oK/G3OVw/5H8UOPYPHm+Bdau7nldQra2zXGf\nb5wZdehIEQO3ZWjWFBu3cKFm0wKBgQC69rG8Q+eXFGs3YFsdOX88KSbxzUQKQQix\nmT8nCA8VAy5NXpFOQQH+K3kabEqwFw7KG4aRcWdvVIizTcNvvlOJ2RHGk/pv/PxI\nuPXdn4PpvTPNyI2hsDEs8bJLh1OvWZPUmJKW4WBDz9haLJYie/pJcJHGvnTzbGdp\nrWRmuK9xbwKBgFDCLO+hP2qecl77vH6E+e9TcANQgmmJzZ3Iie6lYM+EgIWNRlvS\n2bsohEukvZBzfg5f62hu70QhWS3GH2BTskki9msv9Xr+zS3Xc1SY47y0vD2chnWz\nY/ARz0ZzVyp8ZlVKXP45btoZ/nM8LMPqcFBMkvmdPfqUtf3pWFs2/XQLAoGATxxh\n2qrVDP2L3JO+GiChMQCsxPY5Syl3l0akDU0ArMB60CwqyfUB9d3JUZ/u/pHTJTv+\ndf6JaPdZHJ3UC616RcL/HYqyFr7ytYbmKk/8DmSLzhCFtZwLQtxGuGTbyT/bKMMi\njAtzo14ISyfAo3jYUEj8th8S94mwPGwtJrYRLqsCgYBOY1UTC+NdkFMVphtlgdC5\nmZ0M3f4f9itHgTCShYIlHAls6AJx3+mk3VWruHmLec+gGi8yEa+wgmG7LbKit5+a\nHV+8i0MTMBLWeoQOio+323CWbhXF/E7yPKvBmfVTo8D/uMb9VFEribIkGoCDCEDd\nT4yMIRdTi3cmD5Ahh4CTSw==\n-----END PRIVATE KEY-----\n",
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    
    const doc = new GoogleSpreadsheet('1Ik2zHki-nu8nDMU6maB_bU_ATGZk-CcwJYrP-Sy5Few', serviceAccountAuth);
    
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    return doc
}

/* await doc.updateProperties({ title: 'renamed doc' });

const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
console.log(sheet.title);
console.log(sheet.rowCount);
 */
/* // adding / removing sheets
const newSheet = await doc.addSheet({ title: 'another sheet' });
await newSheet.delete(); */