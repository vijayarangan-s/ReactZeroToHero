## NPM :-
> - NPM does'nt stands for Node package manager
> - package.json - configuration for the npm
> - It will manage all package in our system that install
> - All installed package are called dependencies that help to develop the project
> - this installed package are managed by pacakge.json

### there is two type of dependencies
> - Normal dependencies
> - dev dependencies

### Dev Dependencies
>  + the **`-D`** or **`--save-dev`** flag is used when installing a package to indicate that the package should be saved as a development dependency. 
>  + This means that the package is necessary for development purposes, such as building, testing, or other tasks related to the development process, but it is not required for the production runtime of the application.  
>>    ```npm install <package-name> -D ```   
>>                   OR  
>>    ``npm install <package-name> --save-dev `` 

### ^ vs ~ in pacakge version

> - ``^`` is update the minor version.
  >> For eg:- If i update the package,it update the version like - ^1.``2``.3
> - ``~`` is update the major version.
  >> For eg:- If i update the package, it will update the version like - ~``1``.2.3
