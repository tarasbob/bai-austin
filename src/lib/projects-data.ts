export interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  image?: string;
}

export interface ProjectCategoryDetail {
  slug: string;
  title: string;
  heroImage: string;
  projects: Project[];
}

export const projectDetails: Record<string, ProjectCategoryDetail> = {
  sports: {
    slug: 'sports',
    title: 'Sports, Leisure & Recreation',
    heroImage: '/images/projects/sports.jpg',
    projects: [
      {
        id: 'td-ameritrade-park',
        name: 'College World Series of Omaha',
        location: 'TD Ameritrade Park',
        description:
          'The $128M TD Ameritrade Park in Omaha, which opened in April 2011, replaced Rosenblatt Stadium as the home of the NCAA College World Series. The new stadium is also home field for the Creighton University baseball team and the location for community events including music festivals and UFL football games. The stadium includes 24,000 seats, 30 luxury suites and club seating for 2,500 members. This new sports facility was designed to be very accommodating for television broadcasts. BAi, LLC was responsible for the audio system planning and design; video distribution and broadcast TV infrastructure. BAi also provided design services for all the audio and video in the luxury suites.',
      },
      {
        id: 'college-park-center',
        name: 'College Park Center',
        location: 'University of Texas at Arlington',
        description:
          "The $78 million, 218,000-square-foot facility is a transformational jewel for the campus of nearly 33,000 students and a catalyst for revitalization in the city's central business district. It provides a new home court for the University's basketball and volleyball teams, which previously played in Texas Hall, and also gives the city of Arlington a signature facility for high-profile events and entertainment, conferences, and community activities.",
      },
      {
        id: 'td-place-stadium',
        name: 'TD Place Stadium',
        location: 'Formerly Frank Clair Stadium at Lansdowne Park',
        description:
          'The 45,000-Seat TD Place Stadium Expansion/Renovation in Ottawa, Canada, formerly known at Lansdowne Park, was recently completed and is now home to the new Ottawa RedBlacks of the Canadian Football League (CFL) and the Ottawa Fury FC of the North American Soccer League (NASL). The existing 24,000-seat North Stands were dramatically transformed and enhanced with the addition of the South Stands. The stadium is a significant part of a major redevelopment that also includes renovation of historic buildings and the addition of 300,000 SF of retail space along the Rideau Canal. BAi, LLC staff provided Acoustical, Noise Control, Sound Systems and Video Systems planning and design for the project.',
      },
      {
        id: 'dow-diamond',
        name: 'MBF Great Lake Loons',
        location: 'Midland, Michigan',
        description:
          'Centrally located in downtown Midland, beautiful Dow Diamond is easily accessible from Business US 10. Dow Diamond is home to the Great Lakes Loons, Class A affiliate of the Los Angeles Dodgers. April 13, 2007, marked the Loons inaugural game at Dow Diamond. The Loons enjoyed a very successful first year, drawing over 324,000 fans to Dow Diamond during the 2007 season. Dow Diamond quickly established itself as one of the premiere minor league stadiums in the country. Dow Diamond was named the Best New Ballpark of 2007 by Baseball Digest and its Grounds Crew was also awarded the 2007 Midwest League Grounds Crew of the Year.',
      },
      {
        id: 'bbt-ballpark',
        name: 'BB&T Ballpark',
        location: 'Charlotte Knights Baseball Park',
        description:
          'The $128 million ballpark includes: 24,000 seats, with increased seat width and tread depth for greater comfort, 26 luxury suites, 1,000 club seats, four entrances at each corner of the site, each with a unique arrival point, more concession and restroom areas, an open 360-degree walk-around wide concourse, a large Fanfest area, media totems along the outfield, a retail area with views into the bullpen and field team clubhouses, practice facilities and administrative offices.',
      },
      {
        id: 'davidson-college',
        name: 'Davidson College',
        location: 'Athletic Center',
        description:
          "Facility Features: Practice courts for men's and women's basketball and volleyball, locker rooms, team rooms, and film rooms for men's and women's basketball, administrative offices for men's and women's basketball, Cheryle Williamson Center for Dance with two studios, office space and storage, new athletic club for hospitality and football team meeting space, enhanced Nisbet Hall of Fame, new ticket office, new game day main entrance, and expanded Basil Boyd Training Room.",
      },
      {
        id: 'bastrop-isd-stadium',
        name: 'Bastrop Independent School District',
        location: 'Memorial Athletic Complex',
        description:
          'BAi, LLC provided audio visual planning and design services for the new 8,000-seat Bastrop centralized multi-purpose stadium. The facility includes concession, six ticket booths, and dressing/trainer/coaches rooms and was completed for the 2009-2010 school year.',
      },
    ],
  },
  collegiate: {
    slug: 'collegiate',
    title: 'Collegiate',
    heroImage: '/images/projects/collegiate.jpg',
    projects: [
      {
        id: 'lsu-ourso',
        name: 'E.J. Ourso College of Business',
        location: 'Louisiana State University',
        description:
          'The 156,364 SF/$52M E.J. Ourso College of Business encompasses a four-story rotunda, two banks of pavilions housing classrooms and departmental offices, collaborative team rooms, an auditorium and graduate classrooms. The classrooms include technology to facilitate world-class teaching and learning.',
      },
      {
        id: 'unt-rtfp',
        name: 'Radio, TV, Film & Performing Arts Building',
        location: 'University of North Texas',
        description:
          'The University Theater is a proscenium stage with reserved continental seating for 409 people. The Studio Theatre is a flexible performance space that changes according to the needs of each production. It can seat up to 160. The Department has four dance studios with wood sprung floors. Dance classes feature live accompaniment. Students and faculty also have access to a new Dance/Theatre Technology Lab for working directly with digital media and computer technology.',
      },
      {
        id: 'sammons-cancer-center',
        name: 'Charles A. Sammons Cancer Center',
        location: 'Dallas, Texas',
        description:
          'BAi provided acoustical and audio visual design services for the roof top mechanical systems along with noise isolation for the lab fume hoods. BAi also worked with Perkins + Will on the acoustical and audio visual designs of the tenth floor lecture halls and conference center that includes divisible rooms. The center includes a 200-seat auditorium with full audio visual capabilities and control system with record-in-stream capabilities, cameras and recording equipment.',
      },
      {
        id: 'kent-state-roe-green',
        name: 'Roe Green Center for the School of Theatre and Dance',
        location: 'Kent State University, Kent, Ohio',
        description:
          'The new glass lobby entrance for the Music and Speech Center and a 13,000 sq. ft., flexible seating black box theatre which accommodates up to 200 people and will be used for both performance and classroom space. The three new dance studios have sprung wood floors covered with marley dance surface, mirrors, fully equipped sound systems and pianos. Renovated spaces include lighting laboratory, props and crafts lab, workshops and classrooms, a recording studio, a costume shop, performance support space, and a welding lab. The total project incorporated 73,500 square feet at a cost of $13 million.',
      },
      {
        id: 'lsu-music-dramatic-arts',
        name: 'Music and Dramatic Arts Building',
        location: 'Louisiana State University, Baton Rouge, Louisiana',
        description:
          'The Art Deco Lobby and the 400-seat Shaver Theatre were restored to their former brilliance. Many of the architectural elements including the decorative plaster work and marble wainscoting were restored. Cast iron aisle standards, and wood seat backs were refurbished and reused. The Theatre is the jewel of the building and is surrounded by a full complement of new back of house scene, costume, prop shops and dressing rooms.',
      },
      {
        id: 'texas-lutheran',
        name: 'Texas Lutheran University School of Music',
        location: 'Seguin, Texas',
        description:
          'The TLU School of Music portion of the project includes the construction of an approximately 32,000 square foot, two-story School of Music building that will adjoin the north side of Jackson Auditorium. The School of Music building will house faculty offices and studios, ensemble rehearsal halls, and individual student practice rooms.',
      },
    ],
  },
  k12: {
    slug: 'k12',
    title: 'K-12',
    heroImage: '/images/projects/k12.jpg',
    projects: [
      {
        id: 'jenks-math-science',
        name: 'Jenks Public School - Math & Science Center',
        location: 'Jenks, Oklahoma',
        description:
          'The 91,580 SF Jenks Public Schools Math and Science Center includes ten modern math classrooms, 14 flexible science teaching studios, a student health center, a 200-seat multi-purpose meeting room and a 1-5-seat planetarium. Located in the center of the main high school campus, the facility creates a visual and physical link between the Freshman Academy and the senior high classroom building. The project was designed to encourage collaboration between math and science as well as between the different grade levels.',
      },
      {
        id: 'gorzycki-middle-school',
        name: 'Gorzycki Middle School',
        location: 'Austin, Texas',
        description:
          'The Gorzycki Middle School is both a landmark and a community center for the southwest Austin neighborhood and captures views of the surrounding rolling hills and the Austin skyline while blending with the natural environment of the site. The library and commons space are located in the heart of the building, with corridors branching out toward classroom wings for grades sixth, seventh, eighth and Special Education. The project achieved a 3-Star Rating from the Austin Energy Green Building program.',
      },
      {
        id: 'frisco-isd-cte',
        name: 'Career and Technical Education Center - Frisco ISD',
        location: 'Dallas, Texas',
        description:
          "This new 125,000 SF school was designed to attract and accommodate the district's brightest students, and allow them to explore courses consistent with their chosen career field or field of interest (technology, agriculture, culinary arts, veterinary medicine, criminal justice, business or other specialized fields). The state-of-the-art facility prepares students for college and the 21st-century workforce. BAi, LLC provided acoustical consulting services for the TV, Radio and Control Room Studios as well as the HVAC Noise Control Design for the Auditorium and Stage.",
      },
      {
        id: 'el-dorado-high-school',
        name: 'El Dorado High School',
        location: 'El Dorado, Arkansas',
        description:
          'The $314,972-SF $43.3M high school opened in July of 2011. The two-story structure was designed for 1,500 students and includes more than 100 classrooms and instructional spaces, six dedicated computer labs, media center, 450-seat theater with sloped and tiered lecture seating, a basketball arena, 75-seat black box theatre, 13 science labs, "Main Street" circulation corridors and central rotunda, and an 8,000 SF student dining/commons with serving area.',
      },
    ],
  },
  religious: {
    slug: 'religious',
    title: 'Religious',
    heroImage: '/images/projects/worship.jpg',
    projects: [
      {
        id: 'st-williams',
        name: "St. William's Catholic Church",
        location: 'Round Rock, Texas',
        description:
          'This magnificent worship center, dedicated in November 2006, serves the area just north of Austin, and seats 1,500. The new sanctuary building is designed to seat 1,500 people under phase one and master planned to seat 2,500 in the future. The building is a conventional steel frame with Austin white limestone veneer and a clay tile roof. The site also supports an administration/Parish building, an Education building, and a Nursery building.',
      },
      {
        id: 'holy-spirit',
        name: 'Holy Spirit Catholic Church',
        location: 'Tuscaloosa, Alabama',
        description:
          'In 1998, Father Jerry Deasy became pastor of Holy Spirit. A building committee was formed in 2000 to discuss plans and options for building a new church. After a survey and study of the alternatives, the decision was made to build a new, larger church in the present location. A Capital Campaign Drive was launched in late 2005. The new church will seat 1,000 people. Presently there are close to 1,100 families registered in the parish.',
      },
      {
        id: 'emmaus',
        name: 'Emmaus Catholic Church',
        location: 'Lakeway, Texas',
        description:
          'The design is an open three axes space, uses the gothic proportion and an elaborate system of glue laminated structural and decorative arches. Built on a base of Austin limestone the nearly transparent space is sited into the hillside of the site overlooking the village of Lakeway. Each nave axis ends with a 40-foot tall window. The arched window lined vestibule extends across the back of all three nave spaces, with the main nave opening into a large narthex. Extensive use of wood and stone simplifies and enriches the worship experience.',
      },
      {
        id: 'st-john-baptist',
        name: 'St. John the Baptist Catholic Church',
        location: 'Brusly, Louisiana',
        description:
          'The renovations and additions for this 490-seat, Gothic-styled structure built in 1907 restored much of the original detailing. A new gathering foyer, cry room, choir loft, organ, and an access stair were added at the front of the church with the front elevation completely replicated. The original steeple, damaged and removed after a 1934 hurricane, was replaced with a new steeple which was replicated using archived photographs.',
      },
      {
        id: 'concordia-lutheran',
        name: 'Concordia Lutheran Church',
        location: 'San Antonio, Texas',
        description:
          'This campus is located on 45 acres in a rapid populating area and was in need of a new church to accommodate their growing congregation. A 1,700 seat sanctuary was designed and constructed and is expandable to 3,000 in a later phase. The design is a 123 foot lit cross tower visible from the highway from miles away.',
      },
      {
        id: 'briarwood-presbyterian',
        name: 'Briarwood Presbyterian Church',
        location: 'Birmingham, Alabama',
        description:
          "Briarwood Presbyterian Church Education and Conference Center encompasses a two-story adult education and conference center, children's auditorium, three-story youth building, enclosed bridge and 400-vehicle parking garage. The main worship center is a large traditional sanctuary completed in the 1990's. BAi assisted the church in the design of new sound reinforcement and video projection systems, which were added in 2007.",
      },
    ],
  },
  'performing-arts': {
    slug: 'performing-arts',
    title: 'Performing Arts',
    heroImage: '/images/projects/performing-arts.jpg',
    projects: [
      {
        id: 'usf-tampa',
        name: 'Visual and Performing Arts Teaching Facility',
        location: 'Tampa, Florida',
        description:
          'The 113,535 SF/$47M music building includes a 486-seat concert hall and a 116-seat recital hall along with rehearsal and teaching spaces. The design for the new concert hall includes a sound reflecting ceiling system that can be raised or lowered. The reverberation time can be as high as 2.5 seconds depending upon how the adjustable reflectors and curtains are deployed.',
      },
      {
        id: 'hylton-performing-arts',
        name: 'Hylton Performing Arts',
        location: 'Fairfax, Virginia',
        description:
          'The Performing Arts Building addition includes a gracious public lobby that serves as a new entry to the building. A central circulation spine links the lobby to the three main building components: a band rehearsal hall and two dance studios. A 5,000 SF theatre/auditorium with adjustable acoustics provides rehearsal space for the music department ensembles.',
      },
      {
        id: 'cunningham-mansfield',
        name: 'Cunningham Performance Hall - Mansfield ISD',
        location: 'Mansfield, Texas',
        description:
          'Features a Meyer Sound Constellation system for a superior acoustical experience. The performance hall can be divided into three separate event venues: one center section (floor, mezzanine, and balcony) that can seat 4,200 for full stage productions; two side lecture halls that can be closed off from the main auditorium for smaller presentations with theatre seating for 640 a piece. An additional 500 seats can be added on the stage.',
      },
      {
        id: 'allen-isd-pac',
        name: 'Performing Arts Center - Allen ISD',
        location: 'Allen, Texas',
        description:
          'It features a 1,500 seat hall with state of the art lighting and sound capabilities. There are dressing rooms, a scene shop, a costume shop and a green room for performers. In addition to the hall, there is a spacious commons area that looks into the new Culinary Arts classroom and restaurant. Additional spaces include a Band rehearsal hall, renovations to other rehearsal spaces, and a new Dance Dressing facility.',
      },
      {
        id: 'cwu-music-education',
        name: 'Music Education Facility',
        location: 'Ellensburg, Washington',
        description:
          'The new facility includes a 600-seat concert hall, 150-seat recital hall; instrumental, jazz, and choral rehearsal halls; percussion ensemble, practice rooms, and faculty studios. One wing is dedicated to the functional components of music education, classrooms, practice rooms and faculty teaching studios. The other wing encompasses performance and rehearsal spaces. A main lobby connects the two wings.',
      },
      {
        id: 'butler-schrott',
        name: 'Schrott Center for the Performing and Visual Arts',
        location: 'Indianapolis, Indiana',
        description:
          'The Jordan College of Fine Arts Schrott Center Performance Hall project is a 450-seat venue for music and theatre, focused primarily on providing a teaching space for Butler University. The hall utilizes retractable acoustic banners and curtains to tune the room between the needs for a wet music environment and a drier theatrical performance space. The hard proscenium opening is adjustable in width from 40-50 feet.',
      },
      {
        id: 'bastrop-wilhelm',
        name: 'Jerry Fay Wilhelm Center - Bastrop ISD',
        location: 'Bastrop, Texas',
        description:
          'The Art Deco Lobby and the 400-seat Shaver Theatre were restored to their former brilliance. Many of the architectural elements including the decorative plaster work and marble wainscoting were restored. Cast iron aisle standards and wood seat backs were refurbished and reused. The facility also includes a dance rehearsal hall, Black Box theatre, movement studio and percussion rehearsal hall.',
      },
    ],
  },
  convention: {
    slug: 'convention',
    title: 'Convention Facilities',
    heroImage: '/images/projects/convention.jpg',
    projects: [
      {
        id: 'nashville-music-city',
        name: 'Nashville Music City Center',
        location: 'Nashville, Tennessee',
        description:
          'The new convention center encompasses 370,000 SF of exhibit halls, 60,000 SF of ballrooms, 120,000 SF of meeting and retail space plus an 1,800-space parking garage. The facility was constructed on a 16-acre site south of Broadway downtown.',
      },
      {
        id: 'waco-convention',
        name: 'Waco Convention Center',
        location: 'Waco, Texas',
        description:
          'The Waco Convention Center serves as the premier meeting and event facility for central Texas. With a 32,976 square foot exhibit hall, a 15,000 square foot exhibit hall, and the new 13,818 sq. ft. Brazos Ballroom — the Waco Convention Center has the space needed to accommodate larger conventions, social events, and trade shows.',
      },
      {
        id: 'nanjing-international',
        name: 'Nanjing International Conference & Exhibition Center',
        location: 'Nanjing, China',
        description:
          'The new complex, spanning more than 50 acres, is the largest conference and exhibition center in Jiangsu Province. It features eight identical halls, with more than 100,000 sq m of world-class exhibition space arranged along a gracefully curving grand concourse. A centrally located conference center includes 27 meeting rooms, an 800 seat plenary hall as well as a junior and grand ballroom.',
      },
      {
        id: 'georgia-world-congress',
        name: 'Georgia World Congress Center',
        location: 'Atlanta, Georgia',
        description:
          'This 500,000 SF facility includes 150,000 SF of Exhibit space, a 40,000 SF Ballroom, Meeting Rooms, Conference Center and Administrative spaces. An acoustical highlight is the acoustical protection of the Ballroom and Meeting Rooms from high noise levels resulting from flyovers involving aircraft arrivals and departures to and from Hartsfield International Airport.',
      },
      {
        id: 'puerto-rico-convention',
        name: 'Puerto Rico Convention Center',
        location: 'San Juan, Puerto Rico',
        description:
          'Designed as the centerpiece of the New Americas World Trade District, the 550,000 GSF center includes a 150,000 SF exhibit hall, 40,000 SF of banquet space, 40,000 SF of ballroom space, and 100,000 SF of circulation space.',
      },
      {
        id: 'henry-b-gonzales',
        name: 'Henry B. Gonzales Convention Center',
        location: 'San Antonio, Texas',
        description:
          "This large-scale project involved the complete programming, master planning, and design of the expansion and renovation of the existing Henry B. Gonzalez Convention Center. The facility now houses nearly 1 Million Square Feet of space, including 240,000 Square Feet of newly constructed exhibit floor space. The Firm's overall master planning work also included an extension of the San Antonio Riverwalk and the general redevelopment of Hemisfair Park.",
      },
    ],
  },
  'corporate-gov': {
    slug: 'corporate-gov',
    title: 'Corporate & Government',
    heroImage: '/images/projects/corporate.jpg',
    projects: [
      {
        id: 'us-customs',
        name: 'U.S. Customs',
        location: 'New Orleans, Louisiana',
        description:
          'A feasibility study was done with design concepts for converting the underutilized fourth floor to office space; a Historic Building Preservation Plan, classifying and assigning numeric values to all areas and elements of the building; a restoration project to recapture ground floor space for office use, improve sidewalks, provide ADA accessibility, light the exterior of the building, and upgrade or restore key spaces and features ($6 million); a Master Plan to consider comprehensively the architecture and uses of the 4-story, 325,000 square foot building.',
      },
      {
        id: 'dart-police',
        name: 'Dallas Area Rapid Transit Police Center',
        location: 'Dallas, Texas',
        description:
          'The facility provides approximately 69,000 square feet of workspace for police personnel including three floors of modern offices, meeting rooms, showers, lockers and an exercise facility.',
      },
      {
        id: 'harris-county',
        name: 'Harris County Courthouse',
        location: 'Houston, Texas',
        description:
          'The Harris County 1910 Courthouse in downtown Houston reopened after a $65 million restoration and renovation. Located at 301 Fannin, the six-story building is listed on the National Register of Historic Places. The Classical Revival-style building is home to the 1st and 14th Texas State Court of Appeals. The goal was to restore the domed landmark to its original design. Two ornate courtrooms, two of the largest in the county, were restored to their original grandeur.',
      },
      {
        id: 'bryan-justice',
        name: 'Bryan Justice Center',
        location: 'Bryan, Texas',
        description:
          "The Justice Center includes a new police department and jail facility and multiple court space. The Bryan Justice Center is part of a master plan that includes four full city blocks near the City's historic downtown. The new justice center establishes a municipal campus in conjunction with the existing City Hall and the City Utilities building. The design supports the goals of \"New Urbanism\" in re-developing this downtown area.",
      },
      {
        id: 'cameron-county',
        name: 'Cameron County Courthouse',
        location: 'Brownsville, Texas',
        description:
          "Known locally as the Dancy Building after Judge Oscar Dancy, the building now houses administrative functions of the county government including the judge's office, commissioners court and the offices of treasurer and auditor. The project included restoration of the double height district courtroom, the stained glass rotunda and the ornamental plaster. The building was rededicated as the official Cameron County Courthouse on October 27, 2006.",
      },
      {
        id: 'hays-county',
        name: 'Hays County Government Center',
        location: 'San Marcos, Texas',
        description:
          'Project components include: Atrium, Courtroom, Courtyard, Detention, Grand Jury Suite, Judges\' Chambers, Jury Assembly Space, Library, Office Space, Sallyport, Secure Detention, Waiting Room. The government center is 232,000 SF.',
      },
      {
        id: 'forney-justice',
        name: 'Forney Justice Center',
        location: 'Forney, Texas',
        description:
          'The Forney Justice Center houses an advanced Police Service & Detention facility. The two-story, 32,000 square foot Police Buildings flanked by a 6,700 square foot Courthouse that acts as a space for Police Training & Community Services as well. The Forney Justice Center is located along F.M. 548, surrounded by lots of new development including a City Park and a new Hospital.',
      },
    ],
  },
  healthcare: {
    slug: 'healthcare',
    title: 'Healthcare',
    heroImage: '/images/projects/healthcare.jpg',
    projects: [
      {
        id: 'umhb-nursing',
        name: 'University of Mary Hardin-Baylor',
        location: 'Belton, Texas',
        description:
          'The Nursing Education Center is part of a growing flagship program and highly successful curriculum at UMHB. The 77,000 SF facility has one entire floor dedicated to a medical simulation center to serve the nursing students as well as to host training for area healthcare professionals. These simulated medical environments are equipped with digital observation and recording capabilities that allow instant playback for student skills critique and refinement.',
      },
      {
        id: 'utsa-dental',
        name: 'University of Texas - San Antonio',
        location: 'San Antonio, Texas',
        description:
          'This project is a new four-story, 198,000 SF/$95M state-of-the-art clinic that will support the finest in multi-specialty patient care. The project also includes moving the Dental Hygiene program for the School of Health Professions to the Dental School and will be the location for all clinical training and patient care. The pre-doctoral clinic will have 200 operatories and be located on the top two floors.',
      },
      {
        id: 'texas-tech-nursing',
        name: 'Texas Tech University',
        location: 'Abilene, Texas',
        description:
          'BAi, LLC was teamed with Tittle Luther Partnership for the design of this $11M school of nursing that encompasses classrooms, administration and faculty offices to support teaching in a health care environment. The new facility will accommodate 160-200 full-time students. The new 43,000 SF school will cover two floors that include general classrooms and simulation labs.',
      },
      {
        id: 'st-davids',
        name: "St. David's Medical Center",
        location: 'Austin, Texas',
        description:
          'This seven-story, 82,000 SF Medical Office Building provides a broad range of outpatient services and administrative support. On the fifth floor is a 160-seat Auditorium designed to host conferences and symposiums and an adjacent flexible teaching space that will accommodate up to 172 additional occupants. Through the use of a series of movable partitions, this space can be used as one large classroom or divided into five smaller rooms.',
      },
    ],
  },
  museums: {
    slug: 'museums',
    title: 'Museums',
    heroImage: '/images/projects/museums.jpg',
    projects: [
      {
        id: 'georgia-aquarium',
        name: 'Georgia Aquarium',
        location: 'Atlanta, Georgia',
        description:
          'With more than 8 million gallons of marine and fresh water, and more than 100,000 animals of 500 different species, the Georgia Aquarium is a gift to the people of Georgia from Bernie Marcus, co-founder of The Home Depot, and his wife Billi. The mission of the Georgia Aquarium is to be an entertaining, educational and scientific institution featuring exhibitions and programs of the highest standards, promoting the conservation of aquatic biodiversity throughout the world.',
      },
      {
        id: 'audubon-aquarium',
        name: 'Audubon Aquarium of the Americas & IMAX Theatre',
        location: 'New Orleans, Louisiana',
        description:
          'The aquarium and park stand on 16 acres of prime riverfront property on the crescent of the Mississippi River between the historic French Quarter and Central Business District. This 110,000 square foot, three story structure was strongly influenced by the need to accommodate entire habitats that give visitors a view of nature both above and below water. Large volumes of curving, angled glass punctuate the exterior walls.',
      },
      {
        id: 'indianapolis-museum',
        name: 'The Indianapolis Museum of Art',
        location: 'Indianapolis, Indiana',
        description:
          'The museum, which underwent a $74 million expansion in 2005, is located on a 152-acre campus. The Indianapolis Museum of Art is the ninth oldest and eighth largest encyclopedic art museum in the United States. The permanent collection comprises over 54,000 works, including African, American, Asian, and European pieces.',
      },
      {
        id: 'bob-bullock',
        name: 'Bob Bullock Texas State History Museum',
        location: 'Austin, Texas',
        description:
          'The museum has three floors of interactive exhibits; the first floor theme is "land," the second floor theme "identity," and the third floor theme "opportunity." The Spirit Theater hosts a feature presentation taking audiences on an epic journey through the history of Texas. The museum also has an IMAX theater with both 2-D and 3-D capability, seating 400.',
      },
    ],
  },
  studios: {
    slug: 'studios',
    title: 'Studios',
    heroImage: '/images/projects/studios.jpg',
    projects: [
      {
        id: 'tecc-west',
        name: 'Technology, Exploration & Career Center West',
        location: 'Lewisville, Texas',
        description:
          'The Studio area has a built-in Cyc, curtains, lighting, audio playback, PTZs, video monitoring, and intercom to allow for both live-productions and post-productions. The Screening Room area has a rear workstation which allows students to create content live, and to accurately mix in audio in 7.1 surround. It features physical hardware for color grading and audio mixing, tuned per SMPTE standards. The Audio Production area allows for mix downs of various content including ADR, foley, and music performances. The Radio Broadcast area provides students the opportunity to learn real life radio skills for live on-air broadcasting.',
      },
    ],
  },
};

export function getProjectCategory(slug: string): ProjectCategoryDetail | undefined {
  return projectDetails[slug];
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(projectDetails);
}
