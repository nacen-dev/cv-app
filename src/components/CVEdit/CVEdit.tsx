import React, { Component } from "react";
import { FormState } from "../CVMaker";
import { MdAdd } from "react-icons/md";

interface Props {
  form: FormState;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSkillChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  handleAddSkill: () => void;
  handleWorkExperienceChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    id: string
  ) => void;
  handleAddWorkExperience: () => void;
}

export class CVEdit extends Component<Props> {
  render() {
    const {
      form,
      handleChange,
      handleSkillChange,
      handleAddSkill,
      handleWorkExperienceChange,
      handleAddWorkExperience,
    } = this.props;

    return (
      <form className="border m-4 border-black p-4 rounded-md bg-stone-100">
        <div className="flex flex-col">
          <p className="text-2xl mb-2">Personal Details</p>
          <label className="text-lg" htmlFor="firstName">
            First Name:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.firstName}
            name="firstName"
            id="firstName"
          />
          <label className="text-lg" htmlFor="lastName">
            Last Name:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.lastName}
            name="lastName"
            id="lastName"
          />
          <label className="text-lg" htmlFor="title">
            Title:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.title}
            name="title"
            id="title"
          />
          <label className="text-lg" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.email}
            name="email"
            id="email"
          />
          <label className="text-lg" htmlFor="phone">
            Phone Number:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="tel"
            onChange={handleChange}
            value={form.phone}
            name="phone"
            id="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
          <label className="text-lg" htmlFor="location">
            Location:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.location}
            name="location"
            id="location"
          />
          <label className="text-lg" htmlFor="description">
            Description:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.description}
            name="description"
            id="description"
          />
          <p className="text-2xl my-2">Social</p>
          <label className="text-lg" htmlFor="github">
            Github:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.github}
            name="github"
            id="github"
          />{" "}
          <label className="text-lg" htmlFor="linkedin">
            LinkedIn:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.linkedin}
            name="linkedin"
            id="linkedin"
          />
          <p className="text-2xl my-2">Skills</p>
          <ul>
            {form.skills.map((skill, index) => (
              <li className="mb-2" key={index}>
                <input
                  type="text"
                  value={form.skills[index]}
                  onChange={(event) => handleSkillChange(event, index)}
                  className="border w-full border-slate-900 p-1 rounded-sm"
                />
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleAddSkill}
                className="w-full text-lg border rounded bg-sky-700 text-white flex items-center justify-center p-2"
              >
                Add Skill
                <MdAdd />
              </button>
            </li>
          </ul>
          <p className="text-2xl my-2">Work Experience</p>
          {form.workExperiences.map((workExperience) => (
            <ul key={workExperience.id} className="flex flex-col gap-1">
              <li>
                <label
                  className="text-xl"
                  htmlFor={`${workExperience.id}-position`}
                >
                  Position:{" "}
                </label>
                <input
                  type="text"
                  name="position"
                  value={workExperience.position}
                  onChange={(event) =>
                    handleWorkExperienceChange(event, workExperience.id)
                  }
                  className="border w-full border-slate-900 p-1 rounded-sm"
                  id={`${workExperience.id}-position`}
                />
              </li>
              <li>
                <label
                  className="text-xl"
                  htmlFor={`${workExperience.id}-companyName`}
                >
                  Company Name:{" "}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={workExperience.companyName}
                  onChange={(event) =>
                    handleWorkExperienceChange(event, workExperience.id)
                  }
                  className="border w-full border-slate-900 p-1 rounded-sm"
                  id={`${workExperience.id}-companyName`}
                />
              </li>
              <li>
                <label
                  className="text-xl"
                  htmlFor={`${workExperience.id}-location`}
                >
                  Location:{" "}
                </label>
                <input
                  type="text"
                  name="location"
                  value={workExperience.location}
                  onChange={(event) =>
                    handleWorkExperienceChange(event, workExperience.id)
                  }
                  className="border w-full border-slate-900 p-1 rounded-sm"
                  id={`${workExperience.id}-location`}
                />
              </li>
              <li>
                <label
                  className="text-xl"
                  htmlFor={`${workExperience.id}-startDate`}
                >
                  Start Date:{" "}
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={workExperience.startDate}
                  onChange={(event) =>
                    handleWorkExperienceChange(event, workExperience.id)
                  }
                  className="border w-full border-slate-900 p-1 rounded-sm"
                  id={`${workExperience.id}-startDate`}
                />
              </li>
              <li>
                <label
                  className="text-xl"
                  htmlFor={`${workExperience.id}-endDate`}
                >
                  End Date:{" "}
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={workExperience.endDate}
                  onChange={(event) =>
                    handleWorkExperienceChange(event, workExperience.id)
                  }
                  className="border w-full border-slate-900 p-1 rounded-sm"
                  id={`${workExperience.id}-endDate`}
                />
              </li>
              <li>
                <label
                  className="text-xl"
                  htmlFor={`${workExperience.id}-jobDescription`}
                >
                  Job Description:{" "}
                </label>
                <textarea
                  className="border w-full border-slate-900 p-1 rounded-sm resize-none overflow-y-auto h-20"
                  maxLength={255}
                  value={workExperience.jobDescription}
                  onChange={(event) =>
                    handleWorkExperienceChange(event, workExperience.id)
                  }
                  name="jobDescription"
                  id={`${workExperience.id}-jobDescription`}
                />
              </li>
            </ul>
          ))}
          <button
            type="button"
            onClick={handleAddWorkExperience}
            className="w-full text-lg border rounded bg-sky-700 text-white flex items-center justify-center p-2"
          >
            Add Work Experience
            <MdAdd />
          </button>
        </div>
      </form>
    );
  }
}
