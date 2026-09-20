import React from "react";
import { useNavigation } from "../../navigation";
import Icon from "../../Icons";

function Clubspage() {
  const { navigateTo, openApplyModal } = useNavigation();

  const clubs = [
    {
      name: "Science & Robotics Club",
      tag: "Innovation",
      desc: "Our most active academic society turns classroom theory into working prototypes. Members design robots, solar devices and weather-station models, then showcase them at the annual Pioneers Science & Robotics Exhibition and district science fairs.",
      image: "/campus-hero.jpg",
    },
    {
      name: "Cultural & Fine Arts Club",
      tag: "Heritage & Arts",
      desc: "The heartbeat of campus celebrations. The club organises Saraswati Puja, Dashain, Tihar Deusi-Bhailo and Holi, and runs regular music, tabla, folk and modern dance, and drama workshops that keep Nepali arts alive on campus.",
      image: "/college-banner.webp",
    },
    {
      name: "Literary & Debate Club",
      tag: "Language & Speech",
      desc: "Sharpening voices in Nepali and English through parliamentary debates, poetry recitals, essay competitions, spelling bees and dramatics. Members regularly represent the academy in inter-college oratorical and quiz contests.",
      image: "/campus-hero.jpg",
    },
    {
      name: "Sports & Athletics Club",
      tag: "Fitness & Games",
      desc: "From the district-champion volleyball and girls football squads to basketball, badminton, table tennis and track events, the club trains students year-round and hosts the flagship Annual Inter-Faculty Sports Week every Mangsir.",
      image: "/college-banner.webp",
    },
    {
      name: "Youth Red Cross & Health Society",
      tag: "Community Care",
      desc: "Led by our CTEVT General Medicine (HA) students and faculty doctors, this society bridges medical learning with real-world impact. Members organize free health screening camps, blood-donation drives in collaboration with the regional blood bank, and first-aid training workshops for local schools and youth groups. They also conduct hygiene and nutrition awareness programs across the Waling community, teaching preventive care and healthy habits through interactive demonstrations.Beyond service, the society encourages students to develop low-cost diagnostic tools, mobile health apps, and community wellness models — turning compassion into innovation.Every initiative reflects the academy’s commitment to public health education, volunteerism, and social responsibility, making this group a cornerstone of campus outreach.",
      image: "/campus-hero.jpg",
    },
    {
      name: "Environment & Social Service Club",
      tag: "Green Campus",
      desc: "Dedicated to a cleaner, greener Syangja through tree-plantation drives, campus cleanliness weeks, waste segregation, water-conservation projects and voluntary visits to local old-age homes and schools.",
      image: "/college-banner.webp",
    },
    {
      name: "IT & Coding Club",
      tag: "Digital Skills",
      desc: "A hands-on hub for aspiring programmers and designers. Members learn C, Python, HTML/CSS and database basics, build small web projects together, and prepare for national ICT and programming competitions.",
      image: "/campus-hero.jpg",
    },
    {
      name: "Photography & Media Club",
      tag: "Campus Media",
      desc: "The storytellers of Pioneers Academy. The club documents every event through photography and short films, designs the annual yearbook, and manages the academy social-media pages that connect 11K+ followers to campus life.",
      image: "/college-banner.webp",
    },
  ];

  return (
    <div>
      {/* Header Banner */}
      <div className="page-banner">
        <div className="container">
          <div className="breadcrumb">
            <span
              className="breadcrumb-link"
              onClick={() => navigateTo("home")}
            >
              Home
            </span>
            <span>/</span>
            <span>Clubs & Societies</span>
          </div>
          <h1 className="page-banner-title" style={{ marginTop: "14px" }}>
            Clubs & Societies
          </h1>
          <p className="page-banner-subtitle">
            Learning beyond the classroom. Explore the student clubs and
            societies where Pioneers' scholars build leadership, creativity, and
            lifelong friendships.
          </p>
        </div>
      </div>

      {/* One Big Card */}
      <section className="section">
        <div className="container">
          <div className="clubs-card">
            <div className="clubs-intro">
              <span className="section-tag">
                <Icon name="users" size={14} /> Life Beyond Lectures
              </span>
              <h2 className="section-title">Discover Your Community</h2>
              <p className="section-subtitle">
                Every student at Pioneers' Higher Education Academy is
                encouraged to join at least one club. Here is everything our
                campus community organises through the year.
              </p>
            </div>

            <div className="clubs-grid">
              {clubs.map((club, idx) => (
                <article className="club-block" key={idx}>
                  <div className="club-photo">
                    <img
                      src={club.image}
                      alt={club.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/college-banner.webp";
                      }}
                    />
                    <span className="club-tag">{club.tag}</span>
                  </div>
                  <h3 className="club-title">{club.name}</h3>
                  <p className="club-desc">{club.desc}</p>
                </article>
              ))}
            </div>

            <div className="clubs-cta">
              <p>
                Interested in joining a club or starting a new society? Talk to
                our student activities coordinator.
              </p>
              <div className="clubs-cta-actions">
                <button className="btn btn-secondary" onClick={openApplyModal}>
                  <Icon name="graduationCap" size={16} /> Apply for Admission
                </button>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => navigateTo("contact")}
                >
                  <Icon name="phone" size={16} /> Contact Student Office
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clubspage;
