//Field configuration (extension point)
const userTypeFields = {
    student: [
      { name: "university", label: "University" }
    ],
    employee: [
      { name: "company", label: "Company" }
    ],
    freelancer: [
      { name: "portfolio", label: "Portfolio URL" }
    ]
  };
  
  // Later: Adding a new form type (no changes to UserForm)

  userTypeFields.vendor = [
    { name: "gst", label: "GST Number" }
  ];

  // OCP satisfied — extended, not modified