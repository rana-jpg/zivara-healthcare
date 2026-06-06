function Services() {
  return (
    <div className="min-h-screen px-4 md:px-10 py-16 md:py-24">

      {/* Header */}
      <div className="text-center">

        <h1 className="text-3xl md:text-6xl font-bold text-blue-950">
          Our Services
        </h1>

        <p className="mt-6 text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
          Complete Revenue Cycle Management solutions designed to improve
          efficiency, reduce denials, and maximize collections.
        </p>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-20 max-w-6xl mx-auto">

        {[
  {
    title: "Provider Credentialing",
    desc: "Enroll providers with insurance payers and maintain credentialing to ensure uninterrupted reimbursements."
  },
  {
    title: "Insurance Payer Enrollment",
    desc: "Register providers with commercial and government insurance plans for smooth claim processing."
  },
  {
    title: "Eligibility & Benefits Verification",
    desc: "Verify patient insurance coverage, benefits, deductibles, copays, and authorization requirements before appointments."
  },
  {
    title: "Prior Authorization",
    desc: "Obtain insurance approvals for procedures, treatments, and medications to avoid claim denials."
  },
  {
    title: "Medical Coding",
    desc: "Accurately assign ICD-10, CPT, and HCPCS codes to maximize reimbursement and maintain compliance."
  },
  {
    title: "Charge Entry",
    desc: "Timely and accurate posting of medical charges based on provider documentation."
  },
  {
    title: "Claims Submission",
    desc: "Prepare, review, and submit clean claims electronically for faster reimbursement."
  },
  {
    title: "Accounts Receivable (AR) Follow-Up",
    desc: "Track and follow up on unpaid claims to reduce outstanding balances and improve cash flow."
  },
  {
    title: "Denial Management",
    desc: "Analyze denied claims, correct errors, submit appeals, and recover lost revenue."
  },
  {
    title: "Payment Posting",
    desc: "Accurately post insurance and patient payments while reconciling accounts."
  },
  {
    title: "Overdue Claims Recovery",
    desc: "Recover aged and unresolved claims through strategic follow-up and payer communication."
  },
  {
    title: "Patient Billing & Collections",
    desc: "Manage patient statements, payment inquiries, and collection processes professionally."
  },
  {
    title: "Appointment Scheduling",
    desc: "Coordinate patient appointments, reminders, confirmations, and rescheduling."
  },
  {
    title: "EMR & Practice Management Support",
    desc: "Assist with EMR/PMS setup, workflow optimization, and billing system support."
  },
  {
    title: "Reporting & Analytics",
    desc: "Provide detailed reports on collections, AR performance, claim status, and revenue trends."
  },
  {
    title: "End-to-End Revenue Cycle Management",
    desc: "Comprehensive billing solutions covering the entire revenue cycle from patient registration to final payment collection."
  }
].map((item, i) => (
          <div
            key={i}
            className="bg-white/30 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl"
          >
            <h2 className="text-lg md:text-2xl font-bold text-blue-900">
              {item.title}
            </h2>

            <p className="mt-3 md:mt-4 text-sm md:text-gray-700">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Services;