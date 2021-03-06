# Important Information

Thank you for downloading WebGoat! This is the WebGoat Lesson Server version which is currently under development.

This program is a demonstration of common server-side application flaws. The
exercises are intended to be used by people to learn about application
penetration testing techniques.

* [Home Page](http://webgoat.github.io)
* [OWASP Project Home Page](http://www.owasp.org/index.php/Category:OWASP_WebGoat_Project)
* [Source Code](https://github.com/WebGoat/WebGoat)
* [Easy-Run Download](https://webgoat.atlassian.net/builds/browse/WEB-CNTNR)
* [Wiki](https://github.com/WebGoat/WebGoat/wiki)
* [FAQ (old info):](http://code.google.com/p/webgoat/wiki/FAQ)
* [Contact Info - Direct to Bruce Mayhew](webgoat@owasp.org)
* [Mailing List - WebGoat Community - For most questions](owasp-webgoat@lists.owasp.org) 

**WARNING 1:** *While running this program your machine will be extremely
vulnerable to attack. You should to disconnect from the Internet while using
this program.*

**WARNING 2:** *This program is for educational purposes only. If you attempt
these techniques without authorization, you are very likely to get caught. If
you are caught engaging in unauthorized hacking, most companies will fire you.
Claiming that you were doing security research will not work as that is the
first thing that all hackers claim.*

You can find more information about WebGoat at:
(https://github.com/WebGoat/)


# Easy Run Instructions ( For non-developers )

Follow these instructions if you simply wish to run WebGoat

**Prerequisites:** 

Java VM >= 1.6 installed ( JDK 1.7 recommended)

1. Download the executable jar file to any location of your choice:

    (https://webgoat.atlassian.net/builds/browse/WEB-CNTNR/latestSuccessful/artifact/shared/WebGoat-Embedded-Tomcat/WebGoat-6.0.1-war-exec.jar)

2. Run it using java:

    > java -jar WebGoat-6.0-exec-war.jar

3. Then navigate in your browser to: (http://localhost:8080/WebGoat)

4. If you would like to change the port or other options, use:

    > java -jar WebGoat-6.0-exec-war.jar --help


# For Developers

Follow these instructions if you wish to run Webgoat and modify the source code as well.

**Prerequisites:**

* Java >= 1.6 ( JDK 1.7 recommended )
* Maven > 2.0.9
* Your favorite IDE, with Maven awareness: Netbeans/IntelliJ/Eclipse with m2e installed.
* Git, or Git support in your IDE
        
**Note:** WebGoat source code can be downloaded at: (https://github.com/WebGoat/WebGoat).


**Building the project (Developers)**

Using a command shell/window:

   > mvn clean package

Before you can run the project you need to build some lessons first clone https://github.com/WebGoat/WebGoat-Lessons and run:

    ```
    $ cd WebGoat-Lessons
    $ mvn package
    $ cp plugins/* <tomcat>/webapps/WebGoat-6.0-exec-war/plugin_lessons/
    ```

Then you can run the project with one of the steps below:

1. Maven-Tomcat Plugin
   using a command shell/window:

   > mvn -pl webgoat-container tomcat7:run-war


Maven will run the project in an embedded tomcat.

2. Java JAR
   the package phase also builds an executable jar file. You can run it using:

```
   $ cd target
   $ java -jar WebGoat-6.0-exec-war.jar http://localhost:8080/WebGoat
```

3. Tomcat the package phase also builds a war file. You can deploy it using:

    > cp target/WebGoat-6.0-exec-war.war <tomcat>/webapps/
