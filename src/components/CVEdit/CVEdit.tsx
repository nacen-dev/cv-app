import React, { Component } from "react";
import { FormState } from "../CVMaker";
import { MdAdd, MdDelete } from "react-icons/md";

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
  handleEducationChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  handleAddWorkExperience: () => void;
  handleAddEducation: () => void;
  handleDeleteSkill: (index: number) => void;
  handleDeleteWorkExperience: (id: string) => void;
  handleDeleteEducation: (id: string) => void;
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
      handleAddEducation,
      handleEducationChange,
      handleDeleteSkill,
      handleDeleteWorkExperience,
      handleDeleteEducation,
    } = this.props;

    return (
      <form className="border m-4 border-black p-4 rounded-md bg-stone-100">
        <section className="flex flex-col gap-1 mb-4">
          <p className="text-2xl">Personal Details</p>
          <label className="text-lg" htmlFor="fullName">
            Full Name:{" "}
          </label>
          <input
            className="border border-slate-900 p-1 rounded-sm"
            type="text"
            onChange={handleChange}
            value={form.fullName}
            name="fullName"
            id="fullName"
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
          <label className="text-xl" htmlFor="photo">
            Photo:{" "}
          </label>
          <input
            type="file"
            accept="image/apng, image/avif, image/jpeg, image/jpg, image/png, image/svg+xml, image/webp"
            name="photo"
            id="photo"
            onChange={handleChange}
            className="w-full cursor-pointer"
          />
        </section>

        <section className="flex flex-col gap-1 mb-4">
          <p className="text-2xl">Social</p>
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
        </section>

        <section className="flex flex-col gap-1 mb-4">
          <p className="text-2xl">Skills</p>
          <ul className="flex flex-col gap-3">
            {form.skills.map((skill, index) => (
              <li key={index} className="flex gap-2">
                <input
                  type="text"
                  value={form.skills[index]}
                  onChange={(event) => handleSkillChange(event, index)}
                  className="border border-slate-900 p-1 rounded-sm w-full"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteSkill(index)}
                  className="border bg-red-600 text-white flex items-center py-1 px-2 gap-1 rounded"
                >
                  <p className="text-lg">Delete</p>
                  <MdDelete className="text-2xl" />
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={handleAddSkill}
                className="w-full text-lg border rounded bg-sky-700 text-white flex items-center justify-center p-2"
              >
                Add Skill
                <MdAdd className="text-2xl" />
              </button>
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-1 mb-4">
          <p className="text-2xl">Work Experience</p>
          {form.workExperiences.map((workExperience) => (
            <div key={workExperience.id}>
              <ul className="flex flex-col gap-1">
                <li>
                  <label
                    className="text-lg"
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
                    className="text-lg"
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
                    className="text-lg"
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
                    className="text-lg"
                    htmlFor={`${workExperience.id}-startDate`}
                  >
                    Start Date:{" "}
                  </label>
                  <input
                    type="text"
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
                    className="text-lg"
                    htmlFor={`${workExperience.id}-endDate`}
                  >
                    End Date:{" "}
                  </label>
                  <input
                    type="text"
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
                    className="text-lg"
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
              <button
                onClick={() => handleDeleteWorkExperience(workExperience.id)}
                type="button"
                className="text-lg my-2 rounded bg-red-600 text-white flex gap-1 p-2 w-full items-center justify-center"
              >
                Delete Work Experience
                <MdDelete className="text-2xl" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddWorkExperience}
            className="w-full text-lg border rounded bg-sky-700 text-white flex items-center justify-center p-2"
          >
            Add Work Experience
            <MdAdd className="text-2xl" />
          </button>
        </section>
        <section className="flex flex-col gap-1 mb-4">
          <p className="text-2xl">Education</p>
          {form.education.map((educ) => (
            <ul className="flex flex-col gap-1" key={educ.id}>
              <li>
                <label htmlFor={`${educ.id}-schoolName`} className="text-lg">
                  School Name:{" "}
                </label>
                <input
                  value={educ.schoolName}
                  className="border w-full border-slate-900 p-1 rounded-sm resize-none overflow-y-auto"
                  onChange={(event) => handleEducationChange(event, educ.id)}
                  id={`${educ.id}-schoolName`}
                  name="schoolName"
                  type="text"
                />
              </li>
              <li>
                <label htmlFor={`${educ.id}-degree`} className="text-lg">
                  Degree:{" "}
                </label>
                <input
                  value={educ.degree}
                  className="border w-full border-slate-900 p-1 rounded-sm resize-none overflow-y-auto"
                  onChange={(event) => handleEducationChange(event, educ.id)}
                  id={`${educ.id}-degree`}
                  name="degree"
                  type="text"
                />
              </li>
              <li>
                <label htmlFor={`${educ.id}-startDate`} className="text-lg">
                  Start Date:{" "}
                </label>
                <input
                  value={educ.startDate}
                  className="border w-full border-slate-900 p-1 rounded-sm resize-none overflow-y-auto"
                  onChange={(event) => handleEducationChange(event, educ.id)}
                  id={`${educ.id}-startDate`}
                  name="startDate"
                  type="text"
                />
              </li>
              <li>
                <label htmlFor={`${educ.id}-endDate`} className="text-lg">
                  End Date:{" "}
                </label>
                <input
                  value={educ.endDate}
                  className="border w-full border-slate-900 p-1 rounded-sm resize-none overflow-y-auto"
                  onChange={(event) => handleEducationChange(event, educ.id)}
                  id={`${educ.id}-endDate`}
                  name="endDate"
                  type="text"
                />
              </li>
              <li className="my-2">
                <button
                  onClick={() => handleDeleteEducation(educ.id)}
                  type="button"
                  className="text-lg rounded bg-red-600 text-white flex gap-1 p-2 w-full items-center justify-center"
                >
                  Delete Education
                  <MdDelete className="text-2xl" />
                </button>
              </li>
            </ul>
          ))}
          <button
            type="button"
            onClick={handleAddEducation}
            className="w-full text-lg border rounded bg-sky-700 text-white flex items-center justify-center p-2"
          >
            Add Education
            <MdAdd className="text-2xl" />
          </button>
        </section>
      </form>
    );
  }
}
