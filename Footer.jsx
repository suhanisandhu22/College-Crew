const Footer = () => {
  return (
    <section
      className="py-10 bg-gray-50 sm:pt-16 lg:pt-24"
      style={{
        backgroundImage: `
        repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0,0,0,0.05) 0, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 20px)
      `,
        backgroundSize: "40px 40px",
      }}
    >
      <div>
        <hr className="mt-16 mb-10 border-gray-200" />
        <p className="text-sm text-center text-gray-600">
          © Copyright 2025, All Rights Reserved by the Team of College Crew
        </p>
      </div>
    </section>
  );
};

export default Footer;
