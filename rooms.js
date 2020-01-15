function Room(title, img, mobImg, locations, mobLocations, info, transition, alt, pageTitle, hash, focus1, focus2, focus3, focus4) {
		this.title = title;
		this.img = img;
		this.mobImg = mobImg;
		this.locations = locations;
		this.mobLocations = mobLocations;
		this.focus1 = focus1 || null;
		this.focus2 = focus2 || null;
		this.focus3 = focus3 || null;
		this.info = info;
		this.transition = transition;
		this.alt = alt;
		this.pageTitle = pageTitle;
		this.hash = hash;
		this.focus4 = focus4 || null;
}

var rooms = {
	math: new Room(
			"<span class='light-text'>TECHNOLOGY</span><br /><span class='strong'>IN THE CLASSROOM</span>",
			"RoomTemplate_Math_01.png",
			"RoomTemplate_Math_Mob.png",
			['31%', '57%', '36%', '25%', '52%', '67%'],
			['35%', '54%', '46%', '25%', '55%', '67%'],
			["", "Technology is changing how teachers instruct and engage students. Effectively integrating technology into the classroom is both a challenge and an opportunity, and access to technology remains a barrier for some schools. Westat works with various organizations to study access and use of technology in the classroom."], 
			["office", "english"], 
			"A classroom with a student holding a tablet and a laptop on the teacher's desk",
			"Westat - Technology in the Classroom",
			"technology",
			["24/7", "Access to technology provided by the Verizon Foundation to underserved students in middle school", "Westat is working with the Verizon Foundation to study how its program can change teaching and help close the digital divide.", "The Verizon Foundation is providing tablets and 24/7 access to technology to underserved students in middle schools through its Verizon Innovative Learning Schools initiative. Westat is working with the Verizon Foundation to develop a better understanding of program impacts.", "a tablet", 2, "Open a dialog box about technology access in education."],
			["54%", "Public school library media centers that provide laptops for staff use outside of the library media center", "Westat worked with the National Center for Education Statistics to analyze and report <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013315'>information on school library media centers</a>.", "Bitterman, A., Gray, L., and Goldring, R. (2013). <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013315'><cite>Characteristics of Public Elementary and Secondary School Library Media Centers in the United States: Results From the 2011&ndash;12 Schools and Staffing Survey</cite></a> (NCES 2013&ndash;315). U.S. Department of Education. Washington, DC: National Center for Education Statistics. Retrieved 2/3/2017</a>.", "a laptop", 3, "Open a dialog box about staff laptops in schools."],
			["172", "Investing in Innovation (i3) grants awarded to develop and expand innovative education initiatives and teaching practices to improve student outcomes", "Westat supports <a target='_blank' href='https://i3community.ed.gov/impact-stories/2276'>i3 grantees</a> through assessing project needs and strengths, delivering targeted support, and facilitating robust Communities of Practice.", "<p>i3 grantees share <a target='_blank' href='https://i3community.ed.gov/impact-stories/2276'>why innovation is important in schools</a>.</p><p>To learn more, visit the <a target='_blank' href='https://i3community.ed.gov'>i3</a> website.", "a student", 4, "Open a dialog box about grants to improve student outcomes."] 
		),
	english: new Room(
			"<span class='light-text'>STANDARDS</span><br /><span class='strong'>AND STRATEGIES</span>",
			"RoomTemplate_English_02.png",
			"RoomTemplate_English_Mob.png",
			['40%', '53%', '42%', '20%', '58%', '19%'],
			['40%', '53%', '42%', '20%', '58%', '19%'],

			["", "As teachers craft their lessons, they must work to align instruction with state content standards while also reflecting on student data to inform student progress and goals. As they carry out their lesson plans in the classroom, teachers draw on classroom management strategies to keep students engaged."], 
			["math", "science"], 
			"A classroom with a teacher in front of a whiteboard. There are tests on the teacher's desk.",
			"Westat - Standards and Strategies",
			"standards",
			[">80% ", "Teachers reporting using assessment data, including for setting measureable learning objectives and monitoring student progress", "Working with the Institute of Education Sciences, <a target='_blank' href='https://ies.ed.gov/ncee/pubs/20174014/'>Westat coauthored a report on state content standards and assessments</a>.", "Troppe, P., Milanowski, A.T., Heid, C., Gill, B., and Ross, C. <a target='_blank' href='https://ies.ed.gov/ncee/pubs/20174014/'><cite>Implementation of Title I and Title II-A Program Initiatives: Results From 2013&ndash;14</cite></a> (NCEE 2017-4014). Washington, DC: National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education. Retrieved 4/14/2017.", "tests", 2, "Open a dialog box about use of assessment data."],
			["81% ", "Public schools that provide training to classroom teachers or aides on positive behavioral intervention strategies", "Working with the National Center for Education Statistics, <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2015051'>Westat studied and reported information on public school safety and discipline</a>.", "Gray, L., and Lewis, L. (2015). <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2015051'><cite>Public School Safety and Discipline: 2013&ndash;14</cite></a> (NCES 2015-051). U.S. Department of Education. Washington, DC: National Center for Education Statistics. Retrieved 3/18/2017.", "a teacher", 3, "Open a dialog box about school staff training."],
			["44%", "Teachers who reported using instructional activities consistent with college- and career-ready content standards every day", "Working with the Institute of Education Sciences, <a target='_blank' href='https://ies.ed.gov/ncee/pubs/20174014/'>Westat coauthored a report on state standards and school accountability</a>.", "Troppe, P., Milanowski, A.T., Heid, C., Gill, B., and Ross, C. <a target='_blank' href='https://ies.ed.gov/ncee/pubs/20174014/'><cite>Implementation of Title I and Title II-A Program Initiatives: Results From 2013&ndash;14</cite></a> (NCEE 2017-4014). Washington, DC: National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education. Retrieved 4/14/2017.", "a whiteboard", 4, "Open a dialog box about instructional activities that follow best practices."]
		),
	social: new Room(
			"<span class='light-text'>TEACHER AND CLASSROOM</span><br /><span class='strong'>CHARACTERISTICS</span>",
			"RoomTemplate_SocialStudies_01.png",
			"RoomTemplate_SocialStudies_Mob.png",
			['28%', '32%', '38%', '67%', '50%', '20%', '55%', '38%'],
			['39.5%', '25%', '40%', '78%', '57%', '12%', '56%', '42%'],
			["", "Every school, classroom, and teacher is unique. The students' backgrounds, the size of the classroom, and the teacher's experience all contribute to the overall classroom culture and environment. Westat collaborates with the U.S. Department of Education to study various aspects of school and teacher characteristics."],	
			["science", "teachers"], 
			"A classroom. One teacher is helping students at a desk while another teacher works with a group of students at the board.",
			"Westat - Teacher and Classroom Characteristics",
			"characteristics",
			["6.5 million", "Students served by the Individuals with Disabilities Education Act (IDEA)", "Working with the Office of Special Education Programs, Westat directs the <a target='_blank' href='https://ideadata.org/'>IDEA Data Center (IDC)</a> and supports states in collecting, reporting, and analyzing <a target='_blank' href='https://ideadata.org/video/'>IDEA data</a>.", "<p>Westat produced <a target='_blank' href='https://ideadata.org/video/'>a series of videos</a> about the IDC and the importance and impact of IDEA data.</p><p>To learn more, visit the <a target='_blank' href='https://ideadata.org/'>IDC website</a>.</p>", "A student who is using wheelchair", 2, "Open a dialog box about the Individuals with Disabilities Education Act."],
			["38", "States reporting that low-income students are taught at a higher rate by inexperienced teachers", "States wrote Educator Equity Plans identifying equity gaps and describing how states will ensure <a target='_blank' href='https://www.westat.com/our-work/featured-stories/and-how-are-children'>all students</a> have equitable access to excellent educators. <a target='_blank' aria-label='Westat analyzed findings across states and reported key findings - Requires PDF Reader' href='https://www2.ed.gov/programs/titleiparta/equitable/titleiiequityanalysis1031.pdf'>Westat analyzed findings across states and reported key findings</a>.<a href='https://get.adobe.com/reader/' target='_blank' class='pdf-link'>Get Adobe Reader</a>", "<p>Westat highlights the importance of efforts to improve the well-being of <em>all</em> children in <a target='_blank' href='https://www.westat.com/our-work/featured-stories/and-how-are-children'>'And How Are the Children?' video</a>.</p><p>Williams II, W., Adrien, R., Murthy, C., and Pietryka, D. (2016). <a aria-label='Equitable Access to Excellent Educators: An Analysis of States Educator Equity Plans - Requires PDF Reader' target='_blank' href='https://www2.ed.gov/programs/titleiparta/equitable/titleiiequityanalysis1031.pdf'><cite>Equitable Access to Excellent Educators: An Analysis of States' Educator Equity Plans</cite></a>. U.S. Department of Education. Washington, DC: Office of Elementary and Secondary Education. Retrieved 3/25/17.</p>", "Students receiving extra help", 3, "Open a dialog box about educational equity."],
			["1,236", "Teacher leaders supported by the New York City Department of Education (NYC DOE) Teacher Incentive Fund (TIF) grant", "Westat supported <a href='https://tlpcommunity.org/node/7834' target='_blank'>NYC DOE’s TIF project</a> as it worked to expand career opportunities for teachers through its career pathway program.", "<p>Learn more about the <a href='https://tlpcommunity.org/node/7834' target='_blank'>NYC DOE career pathways program</a>.</p><p>To learn more about TIF and TLP, visit the <a target='_blank' href='https://www.tlpcommunity.org/'>TLP website</a>.</p>", "A teacher working at the board", 4, "Open a dialog box about the Teacher Incentive Fund grant."],
			// ["17", "Average middle school class size for public school teachers", "Working with the National Center for Education Statistics, <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013314'>Westat studied and reported on characteristics of public and private school teachers</a>.", "Goldring, R., Gray, L., and Bitterman, A. (2013). <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013314'><cite>Characteristics of Public and Private Elementary and Secondary School Teachers in the United States: Results From the 2011&ndash;12 Schools and Staffing Survey</cite></a> (NCES 2013-314). U.S. Department of Education. Washington, DC: National Center for Education Statistics. Retrieved 3/24/17.", "A student working at the board"],
			["14", "Average number of years of experience of public and private school teachers", "Westat worked with the National Center for Education Statistics to analyze and report <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013314'>information on public and private school teachers</a>.", "Goldring, R., Gray, L., and Bitterman, A. (2013). <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013314'><cite>Characteristics of Public and Private Elementary and Secondary School Teachers in the United States: Results From the 2011&ndash;12 Schools and Staffing Survey</cite></a> (NCES 2013-314). U.S. Department of Education. Washington, DC: National Center for Education Statistics. Retrieved 3/24/17.", "A teacher working with a group of students", 5, "Open a dialog box about teacher experience."]
		),
	teachers: new Room(
			"<span class='light-text'>PROFESSIONAL</span><br /><span class='strong'>SUPPORTS</span>",
			"RoomTemplate_Teachers_01.png",
			"RoomTemplate_Teachers_Mob.png",
			['35%', '52%', '58%', '46%', '70%', '71%'],
			['39%', '54%', '45%', '40%', '59%', '47%'],
			["", "A great teacher can have an immeasurable and lasting effect on her students. High-quality professional development and coaching support tailored a teacher's unique needs are integral to a teacher's effectiveness and continuous improvement."], 
			["social", "school"], 
			"A teachers' work room, where three teachers work at a table.",
			"Westat - Professional Supports",
			"supports",
			["65%", "Public schools with teachers or staff who have specialist or coaching assignments providing professional supports to peers or students", "Westat collaborated with the National Center for Education Statistics to analyze and report <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013312'>characteristics of public and private schools</a>.", "Bitterman, A., Gray, L., and Goldring, R. (2013). <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013312'><cite>Characteristics of Public and Private Elementary and Secondary Schools in the United States: Results From the 2011&ndash;12 Schools and Staffing Survey</cite></a> (NCES 2013&ndash;312). U.S. Department of Education. Washington, DC: National Center for Education Statistics. Retrieved 3/25/2017.", "A teacher holding a stack of folders", 2, "Open a dialog box about teachers or staff providing professional supports."],
			["52%", "Title II, Part A local education agency funds used by districts for professional development", "Westat administers a survey on the <a target='_blank' aria-label='use of funds under Title II, Part A - Requires PDF Reader' href='https://www2.ed.gov/programs/teacherqual/leasurveyfundsrpt82016.pdf'>use of funds under Title II, Part A</a>. <a href='https://get.adobe.com/reader/' target='_blank' class='pdf-link'>Get Adobe Reader</a>", "<a target='_blank' aria-label='Findings From the 2015-2016 Survey on the Use of Funds Under Title II, Part A: August 2016 Subgrants to LEAs - Requires PDF Reader' href='https://www2.ed.gov/programs/teacherqual/leasurveyfundsrpt82016.pdf'><cite>Findings From the 2015-2016 Survey on the Use of Funds Under Title II, Part A: August 2016 Subgrants to LEAs</cite></a>. U.S. Department of Education. Washington, DC: Office of Elementary and Secondary Education. Retrieved 4/17/2017.", "A teacher with a pen and paper", 3, "Open a dialog box about professional development funding through Title II."],
			["144", "Teacher Incentive Fund (TIF) grants awarded since 2006 that help align professional development with the unique needs of educators based on evaluations", "Westat has supported <a target='_blank' href='https://www.tifcommunity.org/'>TIF</a> projects in more than 2,000 urban, suburban, and rural schools <a target='_blank' href='https://www.tifcommunity.org/node/7897'>since 2006</a>.", "<p>See how the <a target='_blank' href='https://www.tifcommunity.org/node/7897'>TIF program has evolved since 2006</a>.</p>To learn more, visit the <a target='_blank' href='https://www.tifcommunity.org/'>TIF website</a>.", "A teacher reading from a paper", 4, "Open a dialog box about professional development funding through TIF grants."]
		),
	office: new Room(
			"<span class='light-text'>EDUCATOR</span><br /><span class='strong'>PREPARATION</span>",
			"RoomTemplate_Principals_01.png",
			"RoomTemplate_Principals_Mob.png",
			['35%', '32%', '47%', '50%', '61%', '44%'],
			['37%', '28%', '52%', '35%', '56%', '69%'],
			["", "Educators follow a variety of pathways to teaching or leading a school. While most teachers complete traditional undergraduate programs, some switch to teaching from other careers and complete alternative route programs. Principals often bring years of experience teaching before they become school leaders and may hold a range of degrees."], 
			["school", "math"], 
			"A principal's office, where a principal speaks with two teachers. A diploma hangs on the wall.",
			"Westat - Educator Preparation",
			"preparation",
			["62%", "Public school principals who hold a master's degree as their highest degree", "Working with the National Center for Education Statistics, <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013313'>Westat studied and reported on characteristics of public and private school principals</a>.  ", "Bitterman, A., Goldring, R., and Gray, L. (2013). <a target='_blank' href='https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2013313'><cite>Characteristics of Public and Private Elementary and Secondary School Principals in the United States: Results From the 2011&ndash;12 Schools and Staffing Survey</cite></a> (NCES 2013-313). U.S. Department of Education. Washington, DC: National Center for Education Statistics. Retrieved 3/18/2017.", "A principal", 2, "Open a dialog box about graduate degrees among administrators."],
			["19%", "Teacher preparation program completers who completed alternative programs", "Westat has collected information on the new teacher pipeline through the <a target='_blank' href='https://title2.ed.gov'>Title II, Higher Education Act accountability system</a> since 1998. ", "For more information on the new teacher pipeline&mdash;including data on the decline of students enrolled in and completing teacher preparation programs&mdash;visit the <a target='_blank' href='https://title2.ed.gov'>Title II website</a>.", "A seated teacher leaning back", 3, "Open a dialog box about alternative certification."],
			["600<br/>hours", "Average length of student teaching experience required by traditional teacher preparation programs", "Westat has collected and studies data on teacher preparation through the <a target='_blank' href='https://title2.ed.gov'>Title II, Higher Education Act accountability system</a> since 1998. ", "For more information on teacher preparation programs and requirements, visit the <a target='_blank' href='https://title2.ed.gov'>Title II website</a>.", "A seated teacher leaning forward", 4, "Open a dialog box about student teaching."]
		),
	science: new Room(
			"<span class='light-text'>HUMAN</span><br /><span class='strong'>CAPITAL MANAGEMENT</span>",
			"RoomTemplate_Science_01.png",
			"RoomTemplate_Science_Mob.png",
			['36%', '50%', '52%', '50%', '61%', '23%'],
			['41%', '82%', '40.8%', '49%', '55%', '23%'],
			["", "Educator evaluations are not only useful tools for providing constructive feedback to educators but can also inform professional development needs, placement and promotion decisions, and compensation. Some schools also offer bonuses to teachers who take on additional roles and responsibilities. Westat is a national leader supporting educator evaluation and compensation."], 
			["english", "social"], 
			"A classroom where a teacher stands at a lab table. He is being observed by a principal holding a tablet.",
			"Westat - Human Capital Management",
			"management",
			["$5,000", "Bonus this principal earned for receiving an effective rating on her principal evaluation last year", "Westat supports several <a target='_blank' href='https://www.tifcommunity.org/node/7900'>TIF</a> grantees providing principal performance incentives to increase high-need students' access to effective principals.  ", "<p>See the <a target='_blank' href='https://www.tifcommunity.org/node/7900'>top 10 things</a> to know about TIF.</p><p>Westat has supported TIF projects in more than 2,000 urban, suburban, and rural schools since 2006. To learn more, visit the <a target='_blank' href='https://www.tifcommunity.org/'>TIF website</a>.", "A principal", 2, "Open a dialog box about principal performance incentives."],
			["87% ", "Teachers who agree that feedback from their observation is a fair assessment of their teaching", "Working with the Institute of Education Sciences, <a target='_blank' href='https://ies.ed.gov/ncee/pubs/20174014/'>Westat coauthored a report on policies related to teacher and principal evaluation and support</a>.", "Troppe, P., Milanowski, A.T., Heid, C., Gill, B., and Ross, C. <a target='_blank' href='https://ies.ed.gov/ncee/pubs/20174014/'><cite>Implementation of Title I and Title II-A Program Initiatives: Results From 2013&ndash;14</cite></a> (NCEE 2017-4014). Washington, DC: National Center for Education Evaluation and Regional Assistance, Institute of Education Sciences, U.S. Department of Education. Retrieved 4/14/2017.", "A tablet held by a principal", 3, "Open a dialog box about observation feedback."],
			["$9,300", "Additional stipend earned by each Promise-Readiness Corps teacher", "Westat worked with Pittsburgh Public Schools to conduct an outcomes analysis for the Promise-Readiness Corps.", "Wells, J., McInerney, J., Miyaoka, A., Steketee, M, and Tran, H. (2016). <cite>Empowering Effective Teachers in the Pittsburgh Public Schools: Key Findings from a Five-Year External Evaluation</cite>.", "A teacher standing at a lab table", 4, "Open a dialog box about the Promise-Readiness Corps."]
		),
};