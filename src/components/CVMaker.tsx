import React, { Component } from "react";
import { nanoid } from "nanoid";

import { CVEdit } from "./CVEdit/CVEdit";
import { CVPreview } from "./CVPreview";

interface WorkExperience {
  id: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  companyName: string;
  jobDescription: string;
}

interface Education {
  id: string;
  schoolName: string;
  startDate: string;
  endDate: string;
  degree: string;
}

export interface FormState {
  fullName: string;
  email: string;
  phone: string;
  workExperiences: WorkExperience[];
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
interface State {
  form: FormState;
  previewMode: boolean;
}

export class CVMaker extends Component<Props, State> {
  state: State = {
    form: {
      fullName: "",
      email: "",
      github: "",
      linkedin: "",
      phone: "",
      photo: "",
      description: "",
      skills: ["", ""],
      workExperiences: [
        {
          id: nanoid(),
          companyName: "",
          endDate: "",
          jobDescription: "",
          location: "",
          position: "",
          startDate: "",
        },
      ],
      education: [
        {
          id: nanoid(),
          schoolName: "",
          startDate: "",
          degree: "",
          endDate: "",
        },
      ],
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
    if (event.target.name === "photo") {
      const target = event.target as HTMLInputElement;
      let file: File;
      if (target.files !== null) {
        file = target.files[0];

        this.setState({
          form: {
            ...this.state.form,
            photo: URL.createObjectURL(file),
          },
        });
      }
    } else {
      this.setState((prevState) => ({
        form: {
          ...prevState.form,
          [event.target.name]: event.target.value,
        },
      }));
    }
  };

  handleSkillChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        skills: prevState.form.skills.map((skill, i) => {
          if (i === index) return event.target.value;
          return skill;
        }),
      },
    }));
  };

  handleAddSkill = () => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        skills: [...prevState.form.skills, ""],
      },
    }));
  };

  handleDeleteSkill = (index: number) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        skills: prevState.form.skills.filter((skill, i) => i !== index),
      },
    }));
  };

  handleWorkExperienceChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        workExperiences: prevState.form.workExperiences.map((workExperience) =>
          workExperience.id !== id
            ? workExperience
            : { ...workExperience, [event.target.name]: event.target.value }
        ),
      },
    }));
  };

  handleAddWorkExperience = () => {
    const workExperience: WorkExperience = {
      id: nanoid(),
      companyName: "",
      endDate: "",
      jobDescription: "",
      location: "",
      position: "",
      startDate: "",
    };

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        workExperiences: [...prevState.form.workExperiences, workExperience],
      },
    }));
  };

  handleDeleteWorkExperience = (id: string) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        workExperiences: prevState.form.workExperiences.filter(
          (workExperience) => workExperience.id !== id
        ),
      },
    }));
  };

  handleEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        education: prevState.form.education.map((educ) =>
          educ.id !== id
            ? educ
            : { ...educ, [event.target.name]: event.target.value }
        ),
      },
    }));
  };

  handleAddEducation = () => {
    const education: Education = {
      id: nanoid(),
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
    };

    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        education: [...prevState.form.education, education],
      },
    }));
  };

  handleDeleteEducation = (id: string) => {
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        education: prevState.form.education.filter((educ) => educ.id !== id),
      },
    }));
  };

  render() {
    return (
      <div>
        <div className="flex items-center justify-center my-4">
          <button
            className={`border py-2 px-4 w-24 rounded rounded-r-none ${
              !this.state.previewMode && "bg-sky-700 text-white"
            }`}
            onClick={this.hidePreview}
          >
            Edit
          </button>
          <button
            className={`border py-2 px-4 w-24 rounded rounded-l-none ${
              this.state.previewMode && "bg-sky-700 text-white"
            }`}
            onClick={this.showPreview}
          >
            Preview
          </button>
        </div>
        {this.state.previewMode ? (
          <CVPreview form={this.state.form} />
        ) : (
          <CVEdit
            handleSkillChange={this.handleSkillChange}
            form={this.state.form}
            handleChange={this.handleChange}
            handleAddSkill={this.handleAddSkill}
            handleWorkExperienceChange={this.handleWorkExperienceChange}
            handleAddWorkExperience={this.handleAddWorkExperience}
            handleAddEducation={this.handleAddEducation}
            handleEducationChange={this.handleEducationChange}
            handleDeleteSkill={this.handleDeleteSkill}
            handleDeleteWorkExperience={this.handleDeleteWorkExperience}
            handleDeleteEducation={this.handleDeleteEducation}
          />
        )}
      </div>
    );
  }
}
