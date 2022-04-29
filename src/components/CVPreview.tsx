import React, { Component } from "react";
import { MdEmail, MdLocationPin, MdPhoneAndroid } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FormState } from "./CVMaker";

interface Props {
  form: FormState;
  className?: string;
}

export class CVPreview extends Component<Props> {
  render() {
    const { form, className } = this.props;
    return (
      <div
        className={`${className} md:border border-black md:mx-[2.5%] p-5 grid grid-cols-[35%_65%] md:grid-cols-[25%_75%] gap-5`}
      >
        <div className="flex flex-col gap-4">
          <img
            src={form.photo}
            className={`rounded-[50%] w-full md:w-32 md:h-32 md:self-center ${
              !form.photo && "opacity-0"
            }`}
            alt=""
          />
          <div>
            <p className="border-b-2 border-sky-700 text-2xl text-sky-700">
              Contact
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="flex items-center gap-2">
                  <MdEmail className="text-sky-700 text-xl" />
                  <span className="text-xl text-sky-700">Email</span>
                </p>
                <p className="text-lg">{form.email}</p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <MdPhoneAndroid className="text-sky-700 text-xl" />
                  <span className="text-xl text-sky-700">Phone</span>
                </p>
                <p className="text-lg">{form.phone}</p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <MdLocationPin className="text-sky-700 text-xl" />
                  <span className="text-xl text-sky-700">Location</span>
                </p>
                <p className="text-lg">{form.location}</p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <BsLinkedin className="text-sky-700 text-xl" />
                  <span className="text-xl text-sky-700">Linkedin</span>
                </p>
                <p className="text-lg">{form.linkedin}</p>
              </li>
              <li>
                <p className="flex items-center gap-2">
                  <MdEmail className="text-sky-700 text-xl" />
                  <span className="text-xl text-sky-700">Github</span>
                </p>
                <p className="text-lg">{form.github}</p>
              </li>
            </ul>
          </div>
          {form.skills.length > 0 && (
            <div>
              <p className="border-b-2 border-sky-700 text-2xl text-sky-700">
                Skills
              </p>
              <ul className="flex flex-col">
                {form.skills.map((skill, index) => {
                  if (skill === "") return "";
                  return (
                    <li key={index}>
                      <p className="!bg-sky-700 text-white my-2 p-2 text-lg">
                        {skill}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div className="px-5">
          <div className="p-3 flex flex-col !bg-sky-700 text-white rounded-md">
            <p className="text-3xl font-semibold">{form.fullName}</p>
            <p className="text-2xl underline underline-offset-4 mb-4">
              {form.title}
            </p>
            <p>{form.description}</p>
          </div>

          {form.workExperiences.length > 0 && (
            <div className="mt-5">
              <p className="text-2xl text-sky-700 border-b-sky-700 border-b-2 mb-4">
                Work Experience
              </p>
              {form.workExperiences.map((workExperience) => (
                <div
                  key={workExperience.id}
                  className="mb-4 flex flex-col gap-2"
                >
                  <p className="text-xl text-sky-700">
                    {workExperience.position}
                  </p>
                  <p className="text-xl">{workExperience.companyName}</p>
                  <div className="flex justify-between text-sky-700">
                    <p>{`${workExperience.startDate} - ${workExperience.endDate}`}</p>
                    <p>{workExperience.location}</p>
                  </div>
                  <p>{workExperience.jobDescription}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5">
            <p className="text-2xl text-sky-700 border-b-sky-700 border-b-2 mb-4">
              Education
            </p>
            {form.education.map((educ) => (
              <div key={educ.id} className="mb-4 flex flex-col gap-2">
                <p className="text-xl text-sky-700">{educ.degree}</p>
                <p className="text-xl">{educ.schoolName}</p>
                <div className="flex justify-between text-sky-700">
                  <p>{`${educ.startDate} - ${educ.endDate}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
