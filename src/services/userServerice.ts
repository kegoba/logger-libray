
const {Logger} = require("../logger/logger")
const logger = Logger.getInstance()








export interface UserData {
  username: string;
  password: string;
  // Add other fields as required
}



  export const loginServices = (userInfo: UserData): Promise<any> => {
    const date = new Date(Date.now()).toLocaleString()
    return new Promise((resolve, reject) => {
      //  login logic here, for example:
      if (userInfo.username && userInfo.password) {
        // perform database operation API call
    const date = new Date(Date.now()).toLocaleString()
    
        logger.info(`${userInfo.username} Just Logined at ${date}`);
        //  write logger.info to file I/O
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
        logger.error(`User attempted to Login but was not Successful ${date}`);
        reject({
          status: 400,
          error: 'Invalid username or password'
        });
      }
    });
  };
  




  export const exposeAllLogger = ()=>{
    console.log("calling all the logger instance")
    logger.info('Info message');
    logger.warn('Warning message');
    logger.error('Error message');
    logger.debug('Error message');  
    logger.verbose('Error message');

    console.log("End of all the logger")

  }

 