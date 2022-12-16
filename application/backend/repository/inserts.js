const crypto = require('crypto');
const bcrypt = require('bcrypt');

class inserts {
    // Insert data
    create_tables(repository) {
        (async () => {
            await repository.sequelize.sync({ force: true });
            await repository.courses.bulkCreate([
                {//1
                    name: "English Reading and Composition",
                    short_name: "ENG100",
                    description: "Course can be described here. Effective Learning Outcomes: Reading skill, Basic Essay Composition"
                },
                {//2
                    name: "Algebra",
                    short_name: "MATH200",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//3
                    name: "Trigonometry",
                    short_name: "MATH300",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//4
                    name: "Calculus I",
                    short_name: "MATH350",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//5
                    name: "Elementary Chinese I",
                    short_name: "CHIN100",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//6
                    name: "United States History",
                    short_name: "HIST120",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//7
                    name: "World History",
                    short_name: "HIST150",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//8
                    name: "Introduction to Computer Programming",
                    short_name: "CSC210",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//9
                    name: "Discrete Math",
                    short_name: "CSC230",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                { //10
                    name: "Introduction to Digital Art",
                    short_name: "ART115",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//11
                    name: "Painting",
                    short_name: "ART200",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//12
                    name: "Public Speaking",
                    short_name: "COMM115",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//13
                    name: "Argumentation and Debate",
                    short_name: "COMM230",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//14
                    name: "Karate",
                    short_name: "KIN150",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//15
                    name: "Weight Lifting",
                    short_name: "KIN200",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//16
                    name: "Science, Sport, and Fitness",
                    short_name: "KIN355",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//17
                    name: "Introduction to Psychology",
                    short_name: "PSY100",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//18
                    name: "Introduction to Business",
                    short_name: "BUS100",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//19
                    name: "Business Management",
                    short_name: "BUS220",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
                {//20
                    name: "Physics with Calculus I",
                    short_name: "PHYS220",
                    description: "Course can be described here. Effective Learning Outcomes: This and That"
                },
            ])
            await repository.prerequisites.bulkCreate([
                {   //trig prerequires algebra
                    prerequirer_fk: 3,
                    prerequired_fk: 2,
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
                {   //trig prerequires reading and composition
                    prerequirer_fk: 3,
                    prerequired_fk: 1, //this is temporary and just for testing, change to a realistic trig prereq.
                    concurrent_allowed: true,
                    minimum_grade: "C"
                },
                {   // calculus prerequires trig
                    prerequirer_fk: 4,
                    prerequired_fk: 3, 
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
                {   // discrete math prerequires intro to programming
                    prerequirer_fk: 9,
                    prerequired_fk: 8, 
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
                {   // discrete math prerequires calculus I
                    prerequirer_fk: 9,
                    prerequired_fk: 4, 
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
                {   // argumentation and debate prerequires public speaking
                    prerequirer_fk: 13,
                    prerequired_fk: 12, 
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
                {   // business management prerequires intro to business
                    prerequirer_fk: 19,
                    prerequired_fk: 18, 
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
                {   // physics with calc I prerequires calc I
                    prerequirer_fk: 20,
                    prerequired_fk: 4, 
                    concurrent_allowed: false,
                    minimum_grade: "C"
                },
            ])
            await repository.professors.bulkCreate([
                {//1
                    name: "Paul Robsen"
                },
                {//2
                    name: "Ada Locklace"
                },
                {//3
                    name: "Michael Michael"
                },
                {//4
                    name: "Mike Chen"
                },
                {//5
                    name: "Cliff Paul"
                },
                {//6
                    name: "John Wick"
                },
                {//7
                    name: "Kevin Ng"
                },
                {//8
                    name: "Travis Smith"
                },
                {//9
                    name: "Tom Myers"
                },
                {//10
                    name: "Joe Cool"
                },
                {//11
                    name: "Zack Powell"
                },
                {//12
                    name: "Lisa Chan"
                },
                {//13
                    name: "Alyssa Yee"
                },
                {//14
                    name: "Steve Curry"
                },
                {//15
                    name: "Jennifer Jones"
                },
                {//16
                    name: "Yenny Walters"
                },
                {//17
                    name: "Evelyn Dormer"
                },
                {//18
                    name: "Peter Holland"
                },
                {//19
                    name: "Michelle Lee"
                },
                {//20
                    name: "Jack Douglas"
                },
            ])
            await repository.events.bulkCreate([
                {//1
                    name: "ENG100-01",
                    location: "Thornton Hall 329",
                    event_type : "false"
                },
                {//2
                    name: "MATH200-01",
                    location: "Thornton Hall 328",
                    event_type : "false"
                },
                {//3
                    name: "MATH300-01",
                    location: "Thornton Hall 328",
                    event_type : "false"
                },
                {//4
                    name: "CHIN100-01",
                    location: "Thornton Hall 328",
                    event_type : "false"
                },
                {//5
                    name: "Fall 2022 Regular Academic Session Drop Deadline",
                    date: "2022-9-12",
                    location: null,
                    details: "Courses dropped before this deadline will NOT be added to transcripts and will not receive any grade.",
                    event_type : "true"
                },
                {//6
                    name: "MATH200-02",
                    location: "Thornton Hall 327",
                },
                {//7
                    name: "HIST120-01",
                    location: "Burk Hall 223",
                    event_type : "false"
                },
                {//8
                    name: "HIST150-01",
                    location: "Burk Hall 223",
                    event_type : "false"
                },
                {//9
                    name: "CSC210-01",
                    location: "Thornton Hall 223",
                    event_type : "false"
                },
                {//10
                    name: "CSC230-01",
                    location: "Thornton Hall 223",
                    event_type : "false"
                },
                {//11
                    name: "ART115-01",
                    location: "Fine Arts 223",
                    event_type : "false"
                },
                {//12
                    name: "ART200-01",
                    location: "Creative Arts 223",
                    event_type : "false"
                },
                {//13
                    name: "COMM115-01",
                    location: "Hensill Hall 223",
                    event_type : "false"
                },
                {//14
                    name: "COMM230-01",
                    location: "Hensill Hall 243",
                    event_type : "false"
                },
                {//15
                    name: "KIN150-01",
                    location: "Burk Hall 331",
                    event_type : "false"
                },
                {//16
                    name: "KIN200-01",
                    location: "Mashouf Wellness Center 223",
                    event_type : "false"
                },
                {//17
                    name: "KIN355-01",
                    location: "Burk Hall 237",
                    event_type : "false"
                },
                {//18
                    name: "PSY100-01",
                    location: "Hensill Hall 145",
                    event_type : "false"
                },
                {//19
                    name: "BUS100-01",
                    location: "Hensill Hall 127",
                    event_type : "false"
                },
                {//20
                    name: "BUS220-01",
                    location: "Hensill Hall 127",
                    event_type : "false"
                },
                {//21
                    name: "PHYS220-01",
                    location: "Science 301",
                    event_type : "false"
                },
                {//22
                    name: "Fall 2022 First Day of Instruction",
                    date: "2022-8-22",
                    location: null,
                    details: "The start of the school semester. First class meeting depends on individual course schedules",
                    event_type : "true"
                },
                {//23
                    name: "Labor Day",
                    date: "2022-9-5",
                    location: null,
                    details: "No classes. Campus open.",
                    event_type : "true"
                },
                {//24
                    name: "Thanksgiving Break",
                    date: "2022-11-24 - 2022-11-26",
                    location: null,
                    details: "No classes. Campus open.",
                    event_type : "true"
                },
                {//25
                    name: "Fall 2022 Finals Week",
                    date: "2022-12-10 - 2022-12-16",
                    location: null,
                    details: "Speak to professors concerning individual classes' final exam schedules.",
                    event_type : "true"
                },
                {//26
                    name: "Fall 2022 Final Grades Due",
                    date: "2022-12-28",
                    location: null,
                    details: "Check your grades section after this date to see the latest grade updates.",
                    event_type : "true"
                },
                {//27
                    name: "Fall 2022 Last Day to Withdraw without a W grade",
                    date: "2022-9-12",
                    location: null,
                    details: "Courses dropped before this deadline will receive a W on their transcripts.",
                    event_type : "true"
                },
                {//28
                    name: "Fall 2022 Class Schedule Available",
                    date: "2022-5-12",
                    location: null,
                    details: "New classes for the semester of Fall 2022 will be available after this date.",
                    event_type : "true"
                },
            ])
            await repository.sections.bulkCreate([
                {//1
                    professor_fk:   1,
                    course_fk:      1,
                    event_fk:       1,
                    class_number:   "1234",
                    section_number: 1,
                    location: "Thornton Hall 329",
                    instruction_mode: 1,
                    seat_capacity: 30,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//2
                    professor_fk:   2,
                    course_fk:      2,
                    event_fk:       2,
                    class_number:   "1324",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 40,
                    waitlist_capacity: 15,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//3
                    professor_fk:   2,
                    course_fk:      3,
                    event_fk:       3,
                    class_number:   "1277",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 40,
                    waitlist_capacity: 15,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//4
                    professor_fk:   3,
                    course_fk:      4,
                    event_fk:       4,
                    class_number:   "1432",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 36,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//5
                    professor_fk:   2,
                    course_fk:      2,
                    event_fk:       6,
                    class_number:   "1010",
                    section_number: 2,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//6
                    professor_fk:   6,
                    course_fk:      6,
                    event_fk:       7,
                    class_number:   "4444",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//7
                    professor_fk:   7,
                    course_fk:      7,
                    event_fk:       8,
                    class_number:   "4445",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//8
                    professor_fk:   8,
                    course_fk:      8,
                    event_fk:       9,
                    class_number:   "4438",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//9
                    professor_fk:   9,
                    course_fk:      9,
                    event_fk:       10,
                    class_number:   "4682",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//10
                    professor_fk:   10,
                    course_fk:      10,
                    event_fk:       11,
                    class_number:   "4683",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//11
                    professor_fk:   11,
                    course_fk:      11,
                    event_fk:       12,
                    class_number:   "4684",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//12
                    professor_fk:   12,
                    course_fk:      12,
                    event_fk:       13,
                    class_number:   "4685",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//13
                    professor_fk:   13,
                    course_fk:      13,
                    event_fk:       14,
                    class_number:   "4686",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//14
                    professor_fk:   14,
                    course_fk:      14,
                    event_fk:       15,
                    class_number:   "4687",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//15
                    professor_fk:   15,
                    course_fk:      15,
                    event_fk:       16,
                    class_number:   "4688",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//16
                    professor_fk:   16,
                    course_fk:      16,
                    event_fk:       17,
                    class_number:   "4689",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//17
                    professor_fk:   17,
                    course_fk:      17,
                    event_fk:       18,
                    class_number:   "4690",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//18
                    professor_fk:   18,
                    course_fk:      18,
                    event_fk:       19,
                    class_number:   "4691",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//19
                    professor_fk:   19,
                    course_fk:      19,
                    event_fk:       20,
                    class_number:   "4692",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
                {//20
                    professor_fk:   20,
                    course_fk:      20,
                    event_fk:       21,
                    class_number:   "4693",
                    section_number: 1,
                    instruction_mode: 1,
                    seat_capacity: 37,
                    waitlist_capacity: 10,
                    course_component: "LEC",
                    term: "Fall 2022",
                    course_attributes: "Lower Division",
                    units: 3
                },
            ])
            await repository.timeslots.bulkCreate([
                // 1996-01-01 = Monday
                //      01-02 = Tuesday, etc...

                //Grouped by event
                {//ENG100-01
                    event_fk: 1,
                    start: "1996-01-01 10:00:00",
                    end: "1996-01-01 10:50:00",
                    recurring: 1,
                }, {
                    event_fk: 1,
                    start: "1996-01-03 10:00:00",
                    end: "1996-01-03 10:50:00",
                    recurring: 1,
                }, {
                    event_fk: 1,
                    start: "1996-01-05 10:00:00",
                    end: "1996-01-05 10:50:00",
                    recurring: 1,
                },
                {//MATH200-01
                    event_fk: 2,
                    start: "1996-01-01 11:00:00",
                    end: "1996-01-01 12:45:00",
                    recurring: 1,
                }, {
                    event_fk: 2,
                    start: "1996-01-03 11:00:00",
                    end: "1996-01-03 12:45:00",
                    recurring: 1,
                },
                {//MATH300-01
                    event_fk: 3,
                    start: "1996-01-05 16:00:00",
                    end: "1996-01-05 18:45:00",
                    recurring: 1,
                },
                {//CHIN100-01
                    event_fk: 4,
                    start: "1996-01-02 10:00:00",
                    end: "1996-01-02 11:45:00",
                    recurring: 1,
                }, {
                    event_fk: 4,
                    start: "1996-01-04 10:00:00",
                    end: "1996-01-04 11:45:00",
                    recurring: 1,
                },
                {//Fall 2022 Regular Academic Session Drop Deadline
                    event_fk: 5,
                    start: "2022-10-02 00:00:00",
                    end: "2022-11-02 23:59:00",
                    recurring: 5,
                },
                {//MATH200-02
                    event_fk: 6,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//HIST120-01
                    event_fk: 7,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//HIST150-01
                    event_fk: 8,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//CSC210-01
                    event_fk: 9,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//CSC230-01
                    event_fk: 10,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//ART115-01
                    event_fk: 11,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//ART200-01
                    event_fk: 12,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//COMM115-01
                    event_fk: 13,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//COMM230-01
                    event_fk: 14,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//KIN150-01
                    event_fk: 15,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//KIN200-01
                    event_fk: 16,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//KIN355-01
                    event_fk: 17,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//PSY100-01
                    event_fk: 18,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//BUS100-01
                    event_fk: 19,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//BUS220-01
                    event_fk: 20,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//PHYS220-01
                    event_fk: 21,
                    start: "1996-01-06 19:00:00",
                    end: "1996-01-06 21:45:00",
                    recurring: 1,
                },
                {//Fall 2022 First Day of Instruction
                    event_fk: 22,
                    start: "2022-08-22 00:00:00",
                    end: "2022-08-22 23:59:00",
                    recurring: 0,
                },
                {//Labor Day
                    event_fk: 23,
                    start: "2022-12-04 19:00:00",
                    end: "2022-12-04 21:45:00",
                    recurring: 3,
                },
                {//Thanksgiving Break
                    event_fk: 24,
                    start: "2022-11-21 00:00:00",
                    end: "2022-11-25 23:59:00",
                    recurring: 0,
                },
                {//Fall 2022 Finals Week
                    event_fk: 25,
                    start: "2022-12-13 00:00:00",
                    end: "2022-12-16 23:59:00",
                    recurring: 1,
                },
                {//Fall 2022 Final Grades Due
                    event_fk: 26,
                    start: "2022-12-28 00:00:00",
                    end: "2022-12-28 23:59:00",
                    recurring: 0,
                },
                {//Fall 2022 Last Day to Withdraw
                    event_fk: 27,
                    start: "2022-12-09 19:00:00",
                    end: "2022-12-09 21:45:00",
                    recurring: 0,
                },
                {//Fall 2022 Class Schedule Available
                    event_fk: 28,
                    start: "2022-05-11 00:00:00",
                    end: "2022-05-11 17:00:00",
                    recurring: 0,
                },
            ])
            await repository.majors.create({
                name: "English"
            })
            await repository.degrees.bulkCreate([
                {
                    name: "Computer Science",
                    degree: "BS",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "English",
                    degree: "BA",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Psychology",
                    degree: "BA",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Mathematics",
                    degree: "BA",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Communication",
                    degree: "BA",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Kinesiology",
                    degree: "BS",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Studio Art",
                    degree: "BA",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "History",
                    degree: "BA",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Business",
                    degree: "BS",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
                {
                    name: "Math",
                    degree: "BS",
                    career: "Undergraduate",
                    program: "Undergraduate Degree-FA",
                },
            ])
            await repository.degree_requirements.bulkCreate([
                // computer science requirements
                {
                    degree_fk: 1,
                    course_fk: 8,
                }, {
                    degree_fk: 1,
                    course_fk: 9,
                }, {
                    degree_fk: 1,
                    course_fk: 20,
                },
                // english requirements
                {
                    degree_fk: 2,
                    course_fk: 1,
                },
                // psychology requirements
                {
                    degree_fk: 3,
                    course_fk: 17,
                },
                // math requirements
                {
                    degree_fk: 4,
                    course_fk: 2,
                }, {
                    degree_fk: 4,
                    course_fk: 3,
                }, {
                    degree_fk: 4,
                    course_fk: 4,
                },
                // communication requirements
                {
                    degree_fk: 5,
                    course_fk: 12,
                }, {
                    degree_fk: 4,
                    course_fk: 13,
                },
                // kinesiology requirements
                {
                    degree_fk: 6,
                    course_fk: 14,
                }, {
                    degree_fk: 6,
                    course_fk: 15,
                }, {
                    degree_fk: 6,
                    course_fk: 16,
                },
                // studio art requirements
                {
                    degree_fk: 7,
                    course_fk: 10,
                }, {
                    degree_fk: 7,
                    course_fk: 11,
                },
                // history requirements
                {
                    degree_fk: 8,
                    course_fk: 6,
                }, {
                    degree_fk: 8,
                    course_fk: 7,
                },
                // business requirements
                {
                    degree_fk: 9,
                    course_fk: 18,
                }, {
                    degree_fk: 9,
                    course_fk: 19,
                },
            ])
            await repository.users.bulkCreate([
                {
                degree_fk: 4,
                username: "Test",
                email: "Test@Test",
                password: await bcrypt.hash("123456789a", 13),
                student_id: "12345678",
                last_term_registered:   "2022-08-22 00:00:00",
                expected_grad_date:     "2023-01-26 00:00:00", //Spring 2023
                graduation_status: 0,
                },
                {
                degree_fk: 2,
                username: "Jim",
                email: "jim1234@gmail.com",
                password: await bcrypt.hash("Jimiscool23", 13),
                student_id: "987654321",
                last_term_registered:   "2022-08-22 00:00:00",
                expected_grad_date:     "2023-01-26 00:00:00", //Spring 2023
                graduation_status: 0,
                },
                {
                degree_fk: 3,
                username: "Alice",
                email: "alice2002@gmail.com",
                password: await bcrypt.hash("Rainbows22", 13),
                student_id: "135792468",
                last_term_registered:   "2022-08-22 00:00:00",
                expected_grad_date:     "2023-01-26 00:00:00", //Spring 2023
                graduation_status: 1,
                },
                {
                degree_fk: 4,
                username: "Allen",
                email: "allen3090@gmail.com",
                password: await bcrypt.hash("Pizzaisgood2022", 13),
                student_id: "257894568",
                last_term_registered:   "2022-08-22 00:00:00",
                expected_grad_date:     "2023-01-26 00:00:00", //Spring 2023
                graduation_status: 1,
                },
            ])
            await repository.sessions.bulkCreate([
                {
                    user_fk: 1,
                    token: "0b73650a-c456-429e-af8e-2758d2b9de2f"
                },
                {
                    user_fk: 2,
                    token: "7bc6f3b6-74ad-403d-abaf-fa47dfef29a1"
                },
                {
                    user_fk: 3,
                    token: "118162db-52b2-449c-a3df-e7cf14289ca1"
                },
                {
                    user_fk: 4,
                    token: "f12d0e3e-7828-11ed-a1eb-0242ac120002"
                },
            ])
            await repository.notifications.bulkCreate([
                //Grouped by timeslot/event
                {//last day to drop
                    user_fk: 1,
                    timeslot_fk: 9
                }, {
                    user_fk: 2,
                    timeslot_fk: 9
                }, {
                    user_fk: 3,
                    timeslot_fk: 9
                }, {
                    user_fk: 4,
                    timeslot_fk: 9
                },
                {//first day of instruction
                    user_fk: 1,
                    timeslot_fk: 26
                }, {
                    user_fk: 2,
                    timeslot_fk: 26
                }, {
                    user_fk: 3,
                    timeslot_fk: 26
                }, {
                    user_fk: 4,
                    timeslot_fk: 26
                },
                {//labor day
                    user_fk: 1,
                    timeslot_fk: 27
                }, {
                    user_fk: 2,
                    timeslot_fk: 27
                }, {
                    user_fk: 3,
                    timeslot_fk: 27
                }, {
                    user_fk: 4,
                    timeslot_fk: 27
                },
                {//thanksgiving
                    user_fk: 1,
                    timeslot_fk: 28
                }, {
                    user_fk: 2,
                    timeslot_fk: 28
                }, {
                    user_fk: 3,
                    timeslot_fk: 28
                }, {
                    user_fk: 4,
                    timeslot_fk: 28
                },
                {//f2022 finals
                    user_fk: 1,
                    timeslot_fk: 29
                }, {
                    user_fk: 2,
                    timeslot_fk: 29
                }, {
                    user_fk: 3,
                    timeslot_fk: 29
                }, {
                    user_fk: 4,
                    timeslot_fk: 29
                },
                {//f2022 grades due
                    user_fk: 1,
                    timeslot_fk: 30
                }, {
                    user_fk: 2,
                    timeslot_fk: 30
                }, {
                    user_fk: 3,
                    timeslot_fk: 30
                }, {
                    user_fk: 4,
                    timeslot_fk: 30
                },
                {//f2022 last day to withdraw
                    user_fk: 1,
                    timeslot_fk: 31
                }, {
                    user_fk: 2,
                    timeslot_fk: 31
                }, {
                    user_fk: 3,
                    timeslot_fk: 31
                }, {
                    user_fk: 4,
                    timeslot_fk: 31
                },
                {//f2022 schedule available
                    user_fk: 1,
                    timeslot_fk: 32
                }, {
                    user_fk: 2,
                    timeslot_fk: 32
                }, {
                    user_fk: 3,
                    timeslot_fk: 32
                }, {
                    user_fk: 4,
                    timeslot_fk: 32
                },
            ])
            await repository.enrollments.bulkCreate([
                //Grouped by user
                {//user 1
                    section_fk: 2,
                    user_fk: 1,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "A",
                    createdAt: "2019-12-03",
                    updatedAt: "2019-12-05",
                }, {
                    section_fk: 2,
                    user_fk: 1,
                    enrollment_status: 3,
                    grading_option: 0,
                    grade: "W",
                }, {
                    section_fk: 4,
                    user_fk: 1,
                    enrollment_status: 3,
                    grading_option: 0,
                    grade: "W",
                    createdAt: "2019-12-03",
                    updatedAt: "2019-12-05",
                }, {
                    section_fk: 4,
                    user_fk: 1,
                    enrollment_status: 0,
                    grading_option: 0,
                    grade: null,
                }, {
                    section_fk: 2,
                    user_fk: 1,
                    enrollment_status: 3,
                    grading_option: 0,
                    grade: "W",
                    createdAt: "2019-12-03",
                    updatedAt: "2020-07-07",
                }, {
                    section_fk: 3,
                    user_fk: 1,
                    enrollment_status: 2,
                    grading_option: 0,
                    grade: null,
                }, {
                    section_fk: 1,
                    user_fk: 1,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "C",
                }, {
                    section_fk: 5,
                    user_fk: 1,
                    enrollment_status: 2,
                    grading_option: 0,
                    grade: null,
                },
                {//user 2
                    section_fk: 2,
                    user_fk: 2,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "B",
                }, {
                    section_fk: 5,
                    user_fk: 2,
                    enrollment_status: 4,
                    grading_option: 1,
                    grade: "CR",
                },
                {//user 3
                    section_fk: 1,
                    user_fk: 3,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "C",
                }, {
                    section_fk: 2,
                    user_fk: 3,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "A",
                }, {
                    section_fk: 7,
                    user_fk: 3,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "A",
                },
                {//user 4
                    section_fk: 1,
                    user_fk: 4,
                    enrollment_status: 4,
                    grading_option: 0,
                    grade: "B",
                }, {
                    section_fk: 2,
                    user_fk: 4,
                    enrollment_status: 3,
                    grading_option: 0,
                    grade: "W",
                },
            ])
            await repository.reviews.bulkCreate([
                {
                    enrollment_fk: 1,
                    professor_fk: 2,
                    content: "decent professor",
                    rating: 3.62,
                    difficulty: 2,
                },
                {
                    enrollment_fk: 10,
                    professor_fk: 2,
                    content: "I had a hard time doing this and that, and this professor helped me understand that and this.",
                    rating: 4.2,
                    difficulty: 3,
                },
                {
                    enrollment_fk: 12,
                    professor_fk: 2,
                    content: "I didn't like this professor. The class was too hard.",
                    rating: 2.1,
                    difficulty: 5,
                },
                {
                    enrollment_fk: 13,
                    professor_fk: 7,
                    content: "Haha funny",
                    rating: 4.2,
                    difficulty: 1,
                },
                {
                    enrollment_fk: 14,
                    professor_fk: 1,
                    content: "I was pretty confused, but I also learned a lot.",
                    rating: 4,
                    difficulty: 4,
                },
            ])
            await repository.health_records.bulkCreate([
                {
                    user_fk: 1,
                    first_name:     "Clay",
                    last_name:      "Banks",
                    gender:         "3",
                    date_of_birth:  "2022-09-12",
                    height:         "1",
                    weight:         "2",
                    street_address: "1234 Wallace dr",
                    city:           "Goultown",
                    state:          "CA",
                    country:        "US",
                    zip_code:       "14865",
                    email:          "something@gmail.com",
                    phone_num:      "1231231234",
                    allergies:      "NA",
                    ethnicity:      "Prefer not to say",
                    mental_illness: "NA",
                },
            ])
            await repository.transcript_records.bulkCreate([
                {
                    user_fk: 1,
                    type: 0,
                    path: './files/uploads/transcript_1.pdf'
                },
            ])
        })()

        console.log("All models were synchronized successfully.");
    }
}

module.exports = inserts;