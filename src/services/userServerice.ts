const {Logger} = require("../logger/logger")
const logger = Logger.getInstance()




export interface UserData {
  username: string;
  password: string;
}



  export const loginServices = (userInfo: UserData): Promise<any> => {
    const date = new Date(Date.now()).toLocaleString()
    return new Promise((resolve, reject) => {
      //  login logic here
      if (userInfo.username && userInfo.password) {
        // perform database operation API call
    const date = new Date(Date.now()).toLocaleString()
        //  using the Logger class for to  log info  to  console
        logger.info(`${userInfo.username} Just Logined at ${date}`);
        setTimeout(() => {
          resolve({
            status: 200,
            data: {
              message: 'Login successful',
              user: userInfo,
            }
          });
        }, 1000);
      } else {
        //  using the Logger class for to  logg error to  console
        logger.error(`User attempted to Login but was not Successful ${date}`);
        reject({
          status: 400,
          error: 'Invalid username or password'
        });
      }
    });
  };
  



// exposing all the avilable logger method
  export const exposeAllLogger = ()=>{
    console.log("calling all the logger method")
    logger.info(' Displaying Info message');
    logger.warn('Displaying Warning message');
    logger.error('  Displaying Error message');
    logger.debug('Displaying Error message');  
    logger.verbose('Displaying Error message');

    console.log("End of all the logger method")

  }

 