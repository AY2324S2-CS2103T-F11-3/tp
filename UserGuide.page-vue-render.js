
    var pageVueRenderFn = function noop (a, b, c) {};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"tether-user-guide"}},[_v("Tether User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tether-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("What if you could enjoy the dynamic nature of professional Applicant Tracking Systems combined with the timeless\nsimplicity of tracking tools like Excel?")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Welcome to Tether, the everyday Hiring Manager's "),_c('strong',[_v("desktop app")]),_v(" for managing applicants, interviewers and interviews.\nIt's optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface\n(GUI).")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("If you can type fast")]),_v(", Tether can get your hiring management tasks done faster than traditional GUI apps.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"table-of-contents"}},[_v("Table of Contents"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#table-of-contents","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed in your Computer. "),_c('a',{attrs:{"href":"https://www.baeldung.com/java-check-is-installed"}},[_v("How to check")])]),_v(" "),_c('ul',[_c('li',[_v("If you do not have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(", download it from "),_c('a',{attrs:{"href":"https://www.oracle.com/java/technologies/javase/jdk11-archive-downloads.html"}},[_v("here")])]),_v(" "),_c('li',[_v("For Mac users, you are recommended to follow this "),_c('a',{attrs:{"href":"https://nus-cs2103-ay2324s2.github.io/website/admin/programmingLanguages.html#programming-language"}},[_v("guide")]),_v(" if you face issues running the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tether.jar")]),_v(" file, notably unreadable or garbled text in the application.")]),_v(" "),_c('li',[_v("Help with configuring correct Java version: "),_c('a',{attrs:{"href":"https://www.happycoders.eu/java/how-to-switch-multiple-java-versions-windows/"}},[_v("Windows")]),_v(" | "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/21964709/how-to-set-or-change-the-default-java-jdk-version-on-macos"}},[_v("MacOS")]),_v(" | "),_c('a',{attrs:{"href":"https://www.baeldung.com/linux/java-choose-default-version"}},[_v("Linux")])])])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tether.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S2-CS2103T-F11-3/tp/releases/tag/v1.3"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the downloaded file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for Tether.")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tether.jar")]),_v(" file. Alternatively, for users with command line experience, open up your favourite command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tether.jar")]),_v("\ncommand to run the application."),_c('br'),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br')])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UpdatedUi.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UpdatedUi.png","alt":"Ui"}})])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"5"}},[_c('li',[_v("Type commands in the command box and press Enter to execute them.")]),_v(" "),_c('li',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of available commands.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"using-features-error-free"}},[_v("Using Features Error-Free"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-features-error-free","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Command names are case-sensitive."),_c('br'),_v("\ne.g if the user types "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADD_APPLICANT")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant")]),_v(", it is interpreted as a invalid command.")])]),_v(" "),_c('li',[_c('p',[_v("Tether will give as specific feedback "),_c('strong',[_v("as possible")]),_v(" if any parameter constraints for commands are violated. Parameter constraints\nwill be listed along with the commands that "),_c('strong',[_v("first")]),_v(" use them (i.e. the same parameter constraints will not be\nexplained everytime the parameter is used, only the first time).")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in any parameters "),_c('strong',[_v("at all")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("view_overall_statistics")]),_v(") will be\nignored. For example, if you attempt to execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines\nas space characters surrounding line-breaks may be omitted when copied over to the application.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Note about directly editing the addressbook.json file:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("We give you the freedom to make any edits to the addressbook.json file but do note that if any invalid edits are made to the addressbook.json before (re)launching the application, then no data will load and an exception will be viewed in the terminal.\n"),_c('ul',[_c('li',[_v("What count as invalid edits? Simply speaking, edits that violate the "),_c('strong',[_v("parameter constraints")]),_v(" of the fields of the\nJSON entries. For example, editing a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("name")]),_v(" to be an emoji, or an email to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(".")]),_v(" "),_c('li',[_v("What "),_c('strong',[_v("do not")]),_v(" count as invalid edits? Edits which violate any "),_c('strong',[_v("business constraints")]),_v(" imposed by Tether. For\nexample, editing all persons to have the same email when emails are required\nto be unique.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"gathering-your-bearings"}},[_v("Gathering your bearings"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gathering-your-bearings","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"the-structure-of-tether"}},[_v("The structure of Tether"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#the-structure-of-tether","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/tetherOrientation.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tetherOrientation.png","alt":"img_3.png"}})])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Taskbar: where you may click on either the "),_c('em',[_v("File")]),_v(" or "),_c('em',[_v("Help")]),_v(" buttons.")]),_v(" "),_c('li',[_v("Command Box: where commands are executed.")]),_v(" "),_c('li',[_v("Result Box: where success or error messages, if any, for executed commands are displayed\n"),_c('ul',[_c('li',[_v("Note that the Result Box may not necessarily refresh everytime a new command is executed. This may happen if, as an example, a command incurs a fatal error before it can generate a result.")])])]),_v(" "),_c('li',[_v("Person/Interview Card: where the details of each applicant/interviewer and interview you add are displayed")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"help-yourself"}},[_v("Help yourself!"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#help-yourself","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" or press the "),_c('em',[_v("Help")]),_v(" button in the taskbar to launch a help window such as the one below:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/img.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/img.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-an-applicant"}},[_v("Adding an applicant:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-an-applicant","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To record an applicant and their contact details in Tether, simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant n/NAME p/PHONE e/EMAIL")]),_v(" and the applicant will appear under the "),_c('em',[_v("Persons")]),_v(" column as seen via the example usage below.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example usage")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant n/Wesley Yu p/88889999 e/wesleyyu@gmail.com")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/img_1.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/img_1.png","alt":"img_1.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Parameter constraints")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Names can only contain alphanumeric characters and spaces, and should not be blank.")]),_v(" "),_c('li',[_v("Phone numbers must be at least 3 digits long and strictly only contain numbers (i.e. no spaces or dashes).")]),_v(" "),_c('li',[_v("Emails should be of the format local-part@domain and adhere to the following constraints:\n"),_c('ul',[_c('li',[_v("The local-part should only contain alphanumeric characters and these special characters, excluding the parentheses, (+_.-). The local-part may not start or end with any special characters.")]),_v(" "),_c('li',[_v("This is followed by a '@' and then a domain name. The domain name is made up of domain labels separated by periods.\nThe domain name must:\n"),_c('ul',[_c('li',[_v("end with a domain label at least 2 characters long")]),_v(" "),_c('li',[_v("have each domain label start and end with alphanumeric characters")]),_v(" "),_c('li',[_v("have each domain label consist of alphanumeric characters, separated only by hyphens, if any.")])])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("No two applicants can have the same email or phone number.\n"),_c('ul',[_c('li',[_v("For two applicants to be considered different, they must have different emails AND different phone numbers.")]),_v(" "),_c('li',[_v("For the discrete mathematics enthusiasts, this is equivalent to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("~(sameEmail || samePhone) = ~sameEmail && ~ samePhone = differentEmail && differentPhone")]),_v(".")])])]),_v(" "),_c('li',[_v("Applicants' remark field will be empty by default and can only be edited later with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark")]),_v(" command (described below).")]),_v(" "),_c('li',[_v("No custom tags are allowed")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-status-to-an-applicant"}},[_v("Adding a status to an applicant:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-status-to-an-applicant","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("applicant_status PHONE s/STATUS")]),_v(" where PHONE is the target applicant's phone number and STATUS may "),_c('strong',[_v("only")]),_v(" be any one of:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("\"Resume review\": for when an applicant has only just entered your hiring pool. Note that "),_c('strong',[_v("this is the default status an applicant receives")]),_v(" when first added.")]),_v(" "),_c('li',[_v("\"Pending interview\": for when you are satisfied with an applicant's potential and have set up or are in the process of scheduling an interview for them.")]),_v(" "),_c('li',[_v("\"Completed interview\": as the natural successor to the previous status.")]),_v(" "),_c('li',[_v("\"Waiting list\": if you - or more specifically the interviewer - are not quite sure about an applicant's future. This status has a "),_c('span',{staticStyle:{"color":"orange"}},[_v("bright orange")]),_v(" backing in Tether to remind you to reconcile the respective applicant's fate!")]),_v(" "),_c('li',[_v("\"Accepted\": in the case that an applicant has impressed their interviewer enough for you to send a happy email "),_c('span',{staticStyle:{"color":"green"}},[_v("as soon as possible")]),_v(".")]),_v(" "),_c('li',[_v("\"Rejected\": for the "),_c('span',{staticStyle:{"color":"red"}},[_v("unfortunate")]),_v(" case....")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("applicant_status 98362254 s/accepted")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addApplicantStatusExample.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addApplicantStatusExample.png","alt":"img_3.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Parameter Constraints")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("A status may strictly only be any of the statuses enumerated above. However, the status parameter is case-insensitive i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s/accepted")]),_v(" is as valid as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s/AcCepTed")]),_v(".")]),_v(" "),_c('li',[_v("If multiple valid status parameters are passed, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant PHONE s/accepted s/rejected")]),_v(", then only the last status will be considered. I.e, the applicant's status will become "),_c('em',[_v("rejected")])]),_v(" "),_c('li',[_v("If multiple valid statuses are passed through one status parameter, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant PHONE s/accepted rejected")]),_v(", then an error will be displayed since \"accepted rejected\" is not any one of the valid statuses. I.e, whatever follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("s/")]),_v(" prefix is considered as one status.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("applicant_status")]),_v(" command "),_c('strong',[_v("overwrites")]),_v(" the applicant's current status. Ultimately, we want you to be able to pivot your applicants to any stage of the hiring pipeline")]),_v(" "),_c('li',[_v("If you schedule an interview with a particular applicant, the applicant's status will change automatically from \"resume review\" to \"pending interview\". Conversely, if you delete an interview involving an applicant, their status will revert to \"resume review\" regardless of what their previous status was.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-an-interviewer"}},[_v("Adding an interviewer:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-an-interviewer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("To record an applicant and their contact details in Tether, simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interviewer n/NAME p/PHONE e/EMAIL")]),_v(" and the interviewer will appear under the "),_c('em',[_v("Persons")]),_v(" column as seen via the example usage below.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interviewer n/Yash p/99998888 e/yash@gmail.com")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/img_2.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/img_2.png","alt":"img_2.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Similar to applicants, no two interviewers can have the same email or phone number.")]),_v(" "),_c('li',[_v("Interviewers' remark field will be empty by default and can only be edited later with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark")]),_v(" command (described below).")]),_v(" "),_c('li',[_v("No custom tags are allowed")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-status-to-an-interviewer"}},[_v("Adding a status to an interviewer:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-status-to-an-interviewer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Tether is capable of tagging an interviewer with a status "),_c('em',[_v("automatically")]),_v(" when an interview concerning the respective interviewer is added. As a specific example, if an interview is scheduled between applicant Wesley and interviewer Yash, then Yash is given a status of "),_c('em',[_v("interview with wesley")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addInterviewerStatusExample.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addInterviewerStatusExample.png","alt":"img_3.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/deleteInterviewerStatusExample.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/deleteInterviewerStatusExample.png","alt":"img_3.png"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-remark-to-an-applicant-interviewer"}},[_v("Adding a remark to an applicant/interviewer:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-remark-to-an-applicant-interviewer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark INDEX r/REMARK")]),_v(" and the interview will appear under the "),_c('em',[_v("Upcoming Interviews")]),_v(" column.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark 1 r/Confident")]),_v(" would add the\n\"Confident\" remark to the applicant/interviewer at index 1.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Parameter Constraints")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The INDEX of the person to be removed has to be within the bounds of the number of people currently in the list. I.e. executing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark -2 r/Confident")]),_v(" when there can't be a negative amount of people, or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark 100 r/Confident")]),_v(" when there's only 20 people, will both lead to errors.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If you only execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark INDEX")]),_v(" without any parameters, the remark of the person at that index will be removed.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-an-interview"}},[_v("Adding an interview:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-an-interview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Now comes a very meaty part of hiring management - scheduling interviews. And to do so, simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interview desc/DESCRIPTION date/DATE st/START_TIME et/END_TIME a/APPLICANT_PHONE_NUMBER i/INTERVIEWER_PHONE_NUMBER")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interview desc/technical date/2024-11-11 st/12:00 et/15:00 a/12345678 i/87654321")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/addInterviewExample.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/addInterviewExample.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Parameter Constraints")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If you would like to not have a description, simply pass an empty parameter"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("desc/")]),_v(".")]),_v(" "),_c('li',[_v("Dates must be in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YYYY-MM-DD")]),_v(" format")]),_v(" "),_c('li',[_v("Times must be in either "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HH:MM")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HH:MM:SS")]),_v(" format")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("You can still schedule new interviews for applicants who have already been rejected or accepted. This is simply to accommodate the possibility of follow-up interviews, amongst other possibilities.")]),_v(" "),_c('li',[_v("Entering dates that have already passed are allowed.")]),_v(" "),_c('li',[_v("Entering start times that are beyond end times are not allowed.")]),_v(" "),_c('li',[_v("When entering an interviewer or applicant phone number that does not exist, tether is unable to determine which is incorrect.")]),_v(" "),_c('li',[_v("When entering a valid interviewer and applicant phone number but placed in the wrong fields, tether is unable to determine which is incorrect.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-persons"}},[_v("Listing all persons:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-persons","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Although the list of persons and their details are displayed on the left side of the GUI by default and is updated automatically\nwhenever new persons are added, there are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(" commands (explained below) that filter the list of persons displayed. If you have executed any of these commands and want to revert to the original unfiltered list of persons, just execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list_persons")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-all-the-interviews"}},[_v("Listing all the interviews:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-all-the-interviews","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Although the list of interviews and their details are displayed on the right side of the GUI by default and is updated automatically\nwhenever new interviews are added, there is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(" commands (explained below) that filters the list of interviews displayed. If you have executed this command and want to revert to the original unfiltered list of interviews, just execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list_interviews")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"finding-persons"}},[_v("Finding persons:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-persons","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("After adding multiple persons into Tether, you find yourself having to manually scroll to locate specific person entries.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command is useful here to save you time in locating such entries provided you already know at least one of\nthe following 3 details of the person: their email, name or phone number.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The command accepts all inputs, "),_c('strong',[_v("including invalid ones")]),_v(" (however, no matching entries will be displayed in such cases).")])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" can also be used to find multiple entries at once. You can provide multiple keywords after the initial\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_[email/name/phone]")]),_v(" and all entries that match any of the keywords will be displayed. Note that all the keywords\nprovided should be of the same type. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_phone")]),_v(" should only be followed by valid phone number(s), not\nemails or names.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("To find a person or persons, execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_[email/name/phone] [keyword 1]...")]),_v(" such as in the example usages illustrated below:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/find-command/base.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/find-command/base.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Multiple matching entries:")]),_v("\nExecuting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_name Alice")]),_v(" will list all entries with the name "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alice")]),_v(" even if it is not a full name as stated earlier as seen below:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/find-command/findnamesuccess.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/find-command/findnamesuccess.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Keyword has to be complete:")]),_v("\nExecuting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_name Ali")]),_v(" will not display any matching entries even though "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ali")]),_v(" is a substring of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Alice")]),_v(".\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0 persons listed!")]),_v(" is the response for such cases of no matching entries as seen below:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/find-command/nomatches.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/find-command/nomatches.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Nonsense keyword inputs:")]),_v("\nExecuting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_email 123456")]),_v(" will likewise result in no matching entries. Not that while the value "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("123456")]),_v(" is not a valid "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("email")]),_v(", the command still accepts it and just displays no matching entries. Result display is similar to above")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Multiple Keywords:")]),_v("\nExecuting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_phone 123 23456")]),_v(" will display the entries that have "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("123")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("23456")]),_v(" as their phone numbers")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/find-command/multiplekeywords.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/find-command/multiplekeywords.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command queries the original unfiltered list of persons, meaning that consecutively executed "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" commands cannot be stacked.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filtering-persons-by-status"}},[_v("Filtering persons by status:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-persons-by-status","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("What if you have no information about an applicant or interviewer's name, phone or email though? Fret not, for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status")]),_v(" command enables you to narrow down the current list of persons on the basis of their current status.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Simply execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status STATUS")]),_v(", and the displayed list will update to show only persons with the required status.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status free")]),_v(" will display all interviewers with status "),_c('em',[_v("free")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status interview with wesley")]),_v(" will display all interviewers containing a status "),_c('em',[_v("interview with wesley")]),_v(" in their status list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Parameter Constraints")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("STATUS may be any one of the valid statuses enumerated in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("applicant_status")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interviewer_status")]),_v(" commands above.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("As of now, there is only support for a single status parameter.")]),_v(" "),_c('li',[_v("If you want to apply filters one-after-the-other seamlessly, you will have to do this manually. I.e. after applying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status free")]),_v(", you will need to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list_persons")]),_v(" again before applying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status interview with wesley")]),_v(".\n"),_c('ul',[_c('li',[_v("If you don't, then the filters will stack on top of the other and you will be searching for people with status "),_c('em',[_v("interview with wesley")]),_v(" "),_c('strong',[_v("among")]),_v(" those with status "),_c('em',[_v("free")]),_v(", which would result in finding people at all.")])])]),_v(" "),_c('li',[_v("No persons will be displayed if there are no persons with the given status")]),_v(" "),_c('li',[_v("Unlike for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command, statuses must be matched exactly i.e. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status interview with wes")]),_v(" will not match an interviewer with status "),_c('em',[_v("interview with wesley")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filtering-interviews-by-date"}},[_v("Filtering interviews by date:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-interviews-by-date","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Navigating through a dense schedule to find specific interviews can be daunting.\nTether simplifies this with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_interviews_by_date")]),_v(" command, allowing you to instantly locate all interviews scheduled for a given date.\nJust enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_interviews_by_date DATE")]),_v(", and Tether will display all interviews for that day.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("To view your full interview schedule again, simply use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list_interviews")]),_v(" command.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("For instance, to see all interviews on May 5th, 2024, you would use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_interviews_by_date 2024-05-05")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Parameter Constraints")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("DATE must be in YYYY-MM-DD format and must be a valid date.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Notes")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("No interviews would be displayed if there are no interviews on that day.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-an-applicant-interviewer"}},[_v("Deleting an applicant/interviewer:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-an-applicant-interviewer","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you're confident in removing an applicant or interviewer from Tether if for example an interviewer leaves your company or an applicant is out of the hiring process, then execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_person PHONE")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_person 81239123")]),_v(" would delete that\napplicant/interviewer.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"deleting-an-interview"}},[_v("Deleting an interview :"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-an-interview","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you're confident in unscheduling an interview perhaps due to changed availability or an unexpected clash, then execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_interview INDEX")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Example Usage")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_interview 1")]),_v(" would delete the first interview in the list.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"view-overall-statistics"}},[_v("View overall statistics:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-overall-statistics","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Total number of applicants as well as applicant numbers by status")]),_v(" "),_c('li',[_v("Total number of interviewers as well as interviewer numbers by status")]),_v(" "),_c('li',[_v("Total number of interviews")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("A simple example usage would be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("view_overall_statistics")]),_v(" to get a result as such:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/viewOverallStatisticsExample.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/viewOverallStatisticsExample.png","alt":"img.png"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clear-all-existing-data"}},[_v("Clear all existing data:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clear-all-existing-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Made multiple mistakes and wish to rebuild your hiring data from scratch? The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" command deletes all existing data in Tether, giving you the fresh start you require.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Note")]),_v(" that this action is irreversible. The moment you enter the command and see the success message "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Addressbook has been cleared!")]),_v(", ALL your data will be deleted permanently. Do exercise caution with this particular command by making an independent copy of your data before clearing it.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exiting-the-program"}},[_v("Exiting the program:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("If you're clocking out for the day, either execute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" directly or press the "),_c('em',[_v("File")]),_v(" button in the taskbar and then press "),_c('em',[_v("Exit")]),_v(" to quit Tether.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("There is "),_c('strong',[_v("no need")]),_v(" to save manually.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains\nthe data of your previous Tether home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Add Applicant")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant n/NAME p/PHONE e/EMAIL")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_applicant n/John Doe p/81239123 e/johndoe123@gmail.com")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Change Applicant Status")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("applicant_status PHONE s/STATUS")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("applicant_status 81239123 s/accepted")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Interviewer")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interviewer n/NAME p/PHONE e/EMAIL")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interviewer n/Jane Doe p/81239123 e/janed@example.com")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Change Interviewer Status")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interviewer_status PHONE s/STATUS")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interviewer_status 81239123 s/free")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Interview")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interview desc/DESCRIPTION date/DATE st/START_TIME et/END_TIME a/APPLICANT_PHONE i/INTERVIEWER_PHONE")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add_interview desc/Interview with John date/2024-11-11 st/10:00 et/11:00 a/81239123 i/91238123")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Person")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_person PHONE")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_person 81239123")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Interview")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_interview INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete_interview 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List Interviews")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list_interviews")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List Persons")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list_persons")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find Persons")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_[email/name/phone] [keyword 1]...")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_name Alice")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find_phone 123 456 789")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Filter Persons by Status")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status STATUS")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_by_status free")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Filter Interviews by date")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_interviews_by_date YYYY-MM-DD")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter_interviews_by_date 2024-05-05")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("View Overall Statistics")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("view_overall_statistics")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear All Existing Data")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")]),_v(", generated on Sat, 13 Apr 2024, 10:55:14 GMT+8]")])])])}
}];
  