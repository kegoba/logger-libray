// Logger.ts
import { LogLevel } from '../logLevels/logLevels';
import * as fs from 'fs';



/*
The Logger class uses Creation Design  (Singleton Design pattern)

Singleton pattern => ensures that a class has only one instance 
and provides a global point of access to that instance. 
Here's how the Logger class implements this pattern:


-getInstance() method can be used to access access the class,

- getInstance() method is use to get single instance, if it does not exist,
 it will create new instance

 Singleton Pattern => Ensures that only one instance of the Logger 
 class exists throughout the application. This is achieved by:
- private static instance variable.
- private constructor.
- public static method to get the single instance.

*/
class Logger {
    private static instance: Logger | null = null;
    private logFilePath: string;

  
    private constructor(logFilePath: string = 'application.log') {
      this.logFilePath = logFilePath;
    }

    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    public log(message: string, level: LogLevel = LogLevel.INFO): void {
      this.writeToConsole(`[${LogLevel[level]}] ${message}`);
      // this will be use to write to file
      this.writeToFile(`[${LogLevel[level]}] ${message}`);

    }
  
    public info(message: string): void {
      this.log(message, LogLevel.INFO);
    }
  
    public warn(message: string): void {
      this.log(message, LogLevel.WARNING);
    }
  
    public error(message: string): void {
      this.log(message, LogLevel.ERROR);
    }
    public debug(message: string): void {
        this.log(message, LogLevel.DEBUG);  
      }

      public verbose(message: string): void {
        this.log(message, LogLevel.VERBOSE);  
      }
  
  
    private writeToConsole(message: string): void {
     
      console.log(message)
      
    }
    // this will be use to write to file
    private writeToFile(message: string): void {
      fs.appendFileSync(this.logFilePath, `${message}\n`);
      
    }
  }
  



  module.exports ={
    Logger
  }