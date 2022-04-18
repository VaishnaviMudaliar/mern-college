import './about.css';
import React from 'react';
import chairman from '../assets/images/chairman.jpg';
import building from '../assets/images/pdea2.png';
export default function About() {
  return (
    <div>
      <section className="about">
        <h1>About</h1>
        <p></p>
        <h2> Vision</h2>
        <p>
          Providing nurturing ground for an individual's development to make
          effective contribution to the society in dynamic environment through
          academic excellence for professional competency.
        </p>
        <h2> Mission </h2>
        <p>
          To provide the state of the art educational facilities for training
          students for the career in engineering and technology. To organize
          quality improvement programs on advances in current technology for the
          benefit of core stakeholders of community. To provide leadership in
          curriculum design and development to strengthen industry-institute
          commune.
        </p>
        <h2>About PDEA</h2>
        <p>
          Pune District Education Assocition is well known educational Society
          founded by the dedicated team of social reformers, lead by Ex-Chief
          Officer of Z. P. Pune, Late Shri. Baburaoji Gholap and has a standing
          over 67 years in the field of education. The year 2003-04 was the
          birth centenary year of our founder secretary. We are proud to mention
          that PDEA has received the prestigious, "Best Educational Institute
          Award" from the Government of Maharashtra for the remarkable
          achievement in the field of education and social work, 5th September
          2000. The Associtian runs diffrent branches like Pre-Primary Schools
          (Marathi and English Medium)-11, Primary Schools-12, Secondary
          Schools-61, Higher Secondary Schools-31, Vocational Cources-25, Senior
          Colleges (Multi Facility) - 08, Ayurved College and Research Center -
          01, Pharmacy Colleges -02, Management Instistutes - 03, Polytechnic
          Institutes - 01, Engineering College - 01, Law College - 01 and D. Ed
          College - 01. The assocition has made up of its leeway since 1941. In
          the year of 1983, a young dynamic leader Prof. Ramkrishna More (Ex.
          Minister of Education, Sports and Youth Welfare and Culture -
          Government of Maharastra) took charge of PDEA as "President". During
          his tenure, Prof. Ramkrishna More has accelrated the activities of
          PDEA with an objective of contributing to the intellectual and social
          transformation in different area like educational, social and
          cultural. All the institutes of PDEA have made remarkable progress in
          the field of education under his leadership. In the year 2006, Inspire
          - Visionary-Many more years of success in all the ways of life -Young
          and dynamic wishing leader, Honorable Ajit Pawar, (Ex. Deputy Chief
          Minister - Government of Maharastra), took the charge of "President"
          of PDEA by legacy. He is inspitring inner and spirtual strength of
          PDEA family viz Life members, Employees and Students. All the brances
          of PDEA is now taking global speed towards the destination.
        </p>
        <h2> Office Bearer</h2>

        <div className="chairman">
          <h2> President's Message</h2>
          <img src={chairman} alt="chairman" />
          <h5>
            Shri. Ajit Pawar Hon. President Pune District Education Association,
            Pune
          </h5>
          <p>
            Our vision is based on hard work, open communication, a strong
            emphasis on team work and a high level of responsibility. This
            visionary culture allows and emphasizes our wards not only to adopt
            the present day challenges but also individual responsibilities to
            the society and our nation at large.
          </p>
          <p>
            Learning should be based on doing things and not merely knowing
            things. Until and unless learning solutions relate to real life and
            motivate the learner to acquire and apply the knowledge, the whole
            process will remain superficial. Any engineering institution worth
            its name looks to optimize the productivity of global leaders. Our
            institution has set specific objectives and planned activities for
            achieving excellence in all spheres of technical education.
          </p>
          <p>
            The service of the institution in creating personally mature,
            professionally equipped and service-oriented graduates is really
            worth mentioning. We strongly believe in academic excellence and do
            not compromise on teaching standards or discipline. These three
            things are the springboards on which we operate.
          </p>
          <p style={{ textTransform: 'uppercase', color: 'red' }}>
            SUCCESS IS A JOURNEY NOT A DESTINATION
          </p>
          <p>
            {' '}
            Ensure That You Are In The Right Direction, Instead Of Just At The
            Right Speed.
          </p>
        </div>

        <p></p>
        <h2> Principle's Message</h2>
        <p></p>
        <h2> Infrastructure</h2>
        <p>
          Pune District Education Association's College Of Engineering Manjari
          (Bk.), Pune is located on Hadapsar Manjari Road, Manjari (Bk.), Pune.
          The campus is developed on a plot having land area 5 acres. There are
          3 buildings constructed in the campus with total built up area of
          14007 Sq. m. The buildings are functionally sound, aesthetically
          pleasant and satisfy are requirements of built up space as per AICTE
          norms.
        </p>
        <img src={building} alt="infrastucture" />
        <h2> Mandatory Disclosure</h2>
        <p></p>
        <h2> Proffesional Institutes</h2>
        <div className="institutes">
          <ul>
            <li>PDEA'S Institute of Technology,Hadapsar,Pune - 28</li>
            <li>
              PDEA's Mahatama Phule Institute of Management & Computer
              Studies,Hadapser. Pune - 28
            </li>
            <li>
              PDEA's Institute of Technical Education,Research &
              Management,Akurdi. Pune - 44
            </li>
            <li>
              PDEA's Baburaoji Ghople Multipurpose INstitute,Sangvi,Pune - 27
            </li>
            <li>
              PDEA's Sheth Govind Raghunath Sable College of Pharmacy,Saswad.
              Pune - 412301
            </li>
            <li>
              PDEA's Shankaroa Ursal College of Pharamacy(Diploma).Kharadi,Pune
              - 14
            </li>
            <li>
              PDEA's Shankaroa Ursal College of Pharmaceuticalo Sciences &
              Research,Kharadi,Pune - 14
            </li>
            <li>
              PDEA's College of Ayurved and Reasearch Center, Akurdi, Pune- 44
            </li>
            <li>PDEA's Vidhi Mahavidyalay,Hadpsar. pune - 28</li>
            <li>PDEA's Institute of Diploma in Education,Kharadi. Pune -14</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
