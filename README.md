## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

	```shell
	npm install
	```
3. Ensure that [Gulp](http://gulpjs.com/) and [JSPM](http://jspm.io/) are installed. If you need to install it, use the following command:

	```shell
	npm install -g gulp jspm
	```
4. From the project folder, execute the following command:

  ```shell
  jspm install
  ```
  
## Running The Application

To run the application simply run
```
gulp watch
```
from the project folder. It'll be available on http://localhost:9877
