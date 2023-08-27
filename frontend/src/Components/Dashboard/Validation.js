import * as Yup from "yup";

export const IssueValidation = Yup.object({
  project_code: Yup.string().required("* Please select project"),
  issue_type: Yup.string().required("* Please select issue type"),
  issue_status: Yup.string().required("* Please select issue status"),
  // summary:Yup.string().oneOf([Yup.ref("new_password"),null,"* Password must be match"]).required(),
  summary: Yup.string().required(),
  description: Yup.string().required(),
  assignee: Yup.string().required(),
  starting_date: Yup.date().required(),
  ending_date: Yup.date().required(),
  reporter: Yup.string().required(),
  email:Yup.string().required(),
  createdby:Yup.string().required(),
  project_file:Yup.string()

});

export const MemberValidation = Yup.object({
  first_name: Yup.string().required(),
  last_name: Yup.string(),
  email: Yup.string().required(),
  phone: Yup.string().required(),
  date_of_joining: Yup.date().required(),
  designation: Yup.string().required(),
  avatar:Yup.string(),
});

export const ProjectValidation = Yup.object({
  project_name: Yup.string().required(),
  description: Yup.string().required(),
  email: Yup.string().required(),
  date_of_creation: Yup.date().required(),
  project_type: Yup.string().required(),
  project_file:Yup.string()
})
