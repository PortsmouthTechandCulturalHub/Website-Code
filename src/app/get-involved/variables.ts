export const hero: HeroTypes = {
  image: {
    width: 2048,
    height: 1536,
    src: "/images/get-involved/get-involved-hero.jpg",
    alt: "get-involved",
  },
  desc: "Empower Change With Your Contribution",
};

export type Volunteer = {
  title: string;
  content: string;
  volunteerForm: {
    image: Image;
    title: string;
    subTitle: string;
  };
};

export const volunteer = {
  title: "Volunteering Opportunities",
  content:
    "Volunteers are the backbone of our community, and we’re always looking for passionate individuals to help support our initiatives. Whether you're an expert in tech, an event planner, or just someone who wants to make a difference, there’s a volunteer role for you",
  volunteerForm: {
    image: {
      width: 59,
      height: 72,
      src: "/images/get-involved/volunteer-form.jpg",
      alt: "volunteering",
    },
    title: "You volunteering has the power to transform lives",
    subTitle:
      "Support our events by helping to run workshops, conferences, and community tech days, and by mentoring newcomers to tech. You can also assist with community outreach by promoting our services and connecting with local groups",
  },
};
