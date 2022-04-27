import React, { Component } from "react";
import { CVEdit } from "./CVEdit/CVEdit";

interface WorkExperience {
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  companyName: string;
  jobDescription: string;
}

interface Education {
  schoolName: string;
  startDate: string;
  endDate: string;
  degree: string;
}

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  workExperience: WorkExperience[];
  linkedin: string;
  github: string;
  title: string;
  description: string;
  photo: string;
  education: Education[];
  skills: string[];
  location: string;
}

interface Props {}

type FormDataArray = "workExperience" | "education" | "skills";

interface State {
  formState: FormState;
  previewMode: boolean;
}

export class CVMaker extends Component<Props, State> {
  state: State = {
    formState: {
      firstName: "",
      lastName: "",
      email: "",
      github: "",
      linkedin: "",
      phone: "",
      photo: "",
      description: "",
      skills: ["", ""],
      workExperience: [
        {
          companyName: "",
          endDate: "",
          jobDescription: "",
          location: "",
          position: "",
          startDate: ""
        }
      ],
      education: [],
      title: "",
      location: "",
    },
    previewMode: false,
  };

  showPreview = () => {
    this.setState({
      previewMode: true,
    });
  };

  hidePreview = () => {
    this.setState({
      previewMode: false,
    });
  };

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState((prevState) => ({
      formState: {
        ...prevState.formState,
        [event.target.name]: event.target.value,
      },
    }));
  };

  handleSkillChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    this.setState((prevState) => ({
      formState: {
        ...prevState.formState,
        skills: prevState.formState.skills.map((skill, i) => {
          if (i === index) return event.target.value;
          return skill;
        }),
      },
    }));
  };

  handleAddSkill = () => {
    console.log("Add skill clicked");
    this.setState((prevState) => ({
      formState: {
        ...prevState.formState,
        skills: [...prevState.formState.skills, ""],
      },
    }));
  };

  handleFormArrayElements = (formItem: string, formData: any) => {
    this.setState((prevState) => ({
      formState: {
        ...prevState.formState,
        [formItem as FormDataArray]: [
          ...prevState.formState[formItem as FormDataArray],
          formData,
        ],
      },
    }));
  };

  render() {
    return (
      <div>
        <CVEdit
          handleSkillChange={this.handleSkillChange}
          form={this.state.formState}
          handleChange={this.handleChange}
          handleAddSkill={this.handleAddSkill}
        />
      </div>
    );
  }
}
