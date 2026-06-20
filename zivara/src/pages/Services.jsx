function Services() {
  const services = [
    {
      title: "US Healthcare Revenue Cycle Management",
      desc: "We manage the entire revenue cycle process, from patient eligibility verification and medical coding to claim submission, payment posting, and denial management. Our streamlined approach helps accelerate collections, reduce accounts receivable (A/R) aging, and uncover actionable insights through comprehensive, decision-ready reporting, enabling healthcare providers to improve financial performance and operational efficiency.",
    },
    {
      title: "Physician Credentialing",
      desc: "We provide end-to-end management of payer enrollments, group additions, re-credentialing, and contract reviews to ensure a seamless onboarding and maintenance process. Through organized, proactive, and thoroughly documented follow-ups, we help shorten the time to bill, minimize administrative delays, and reduce unnecessary back-and-forth communication with payers, allowing providers to focus on delivering quality patient care.",
    },
    {
      title: "Patient Eligibility & Demographics Verification",
      desc: "We proactively verify patient benefits, coordination of benefits (COB), referrals, visit limits, and financial responsibility before appointments. This helps prevent front-desk surprises, reduce claim denials, and ensure that scheduling, documentation, and insurance information remain accurate, aligned, and up to date throughout the patient care process.",
    },
    {
      title: "Prior Authorizations",
      desc: "We begin the prior authorization process at least two weeks before scheduled appointments, monitor requests daily, and promptly escalate urgent cases when needed. By ensuring all required medical necessity documentation is obtained and maintained, we help minimize appointment reschedules, treatment delays, and claim denials across a wide range of specialties.",
    },
    {
      title: "Medical Coding & Billing",
      desc: "We ensure accurate CPT and ICD-10 coding, timely charge entry, and same-day claim submission to support a smooth revenue cycle process. Through comprehensive audits and claim-edit reviews, we strengthen compliance, accelerate reimbursements, and safeguard revenue by reducing errors and minimizing the risk of claim rejections.",
    },
    {
      title: "Payment Posting (Insurances & Patients)",
      desc: "We post ERAs and EOBs within 24 hours, reconcile payment variances, identify underpayments, and accurately apply secondary insurance balances. Our proactive follow-up process helps maintain consistent cash flow, quickly resolve payment issues, and ensure that discrepancies are addressed before they impact revenue performance.",
    },
    {
      title: "Dental & Vision Verification and Billing",
      desc: "We manage dental and vision eligibility, authorizations, coding, and payer-specific requirements with precision. By aligning benefits verification with proper documentation, we help accelerate reimbursements while ensuring smooth operations and a seamless patient experience without interruptions.",
    },
    {
      title: "Reporting & Analytics (Weekly & Monthly)",
      desc: "Weekly and monthly scorecards clearly highlight performance trends across key metrics such as denials, collections, A/R aging, high-balance claims, productivity, and write-offs. These insights drive targeted action, support team coaching, and enable continuous improvement across the revenue cycle.",
    },
    {
      title: "Account Receivable & Denial Management",
      desc: "Dedicated follow-up efforts help reduce aging, resolve rejections, and drive timely appeals. We perform root cause analysis, refine workflows, and prevent repeat issues using payer-specific playbooks, dashboards, and recovery targets.",
    },
    {
      title: "Patients Statements & Collections",
      desc: "Clear billing statements and flexible payment options help reduce confusion and improve collection rates. We coordinate reminders, address patient questions, and guide next steps while maintaining trust and a positive patient experience. In addition, our dedicated team follows up with both insurance providers and patients to resolve pending claims efficiently.",
    },
    {
      title: "Clearinghouse Setup & Enrollement",
      desc: "We set up and manage 837 and 835 transactions, eligibility checks (270/271), payer connections, and complete end-to-end testing. This streamlined configuration improves claim submission accuracy, reduces rework, minimizes posting delays, and lowers manual intervention across the billing workflow.",
    },
  ];

  return (
    <section id="services" className="px-4 md:px-10 py-10 md:py-20">

      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Services & Solutions
        </h1>

        <p className="mt-5 text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-7 md:leading-9">
          Comprehensive Revenue Cycle Management services designed to improve
          operational efficiency, reduce denials, accelerate reimbursements,
          and maximize revenue.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-10 md:mt-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-md p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl hover:-translate-y-1 transition duration-300"
          >
            <h2 className="text-lg md:text-2xl font-bold text-blue-900">
              {service.title}
            </h2>

            <p className="mt-3 text-gray-700 leading-7">
              {service.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Services;