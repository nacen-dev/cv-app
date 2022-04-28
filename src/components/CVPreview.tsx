import React, { Component } from "react";
import { MdEmail } from "react-icons/md";
import { FormState } from "./CVMaker";

interface Props {
  form: FormState;
}

export class CVPreview extends Component<Props> {
  render() {
    const { form } = this.props;
    return (
      <div className="border border-black mx-[2.5%] p-4 grid grid-cols-[30%_70%] md:grid-cols-[20%_80%] gap-4">
        <div className="flex flex-col">
          <img
            src={form.photo}
            className={`rounded-[50%] w-full md:w-32 md:h-32 md:self-center ${
              !form.photo && "opacity-0"
            }`}
            alt=""
          />
          <div>
            <p className="border-b-2 text- text-xl">Contact</p>
            <ul>
              <li>
                <p className="flex items-center">
                  <MdEmail className="text-sky-700 text-xl" />
                  <span>Email</span>
                </p>
                <p>{form.email}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-2">
          <div className="p-3 flex flex-col bg-sky-700 text-white rounded-md">
            <p className="text-2xl font-semibold">{form.fullName}</p>
            <p className="text-xl underline underline-offset-4 mb-4">
              {form.title}
            </p>
            <p>{form.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
