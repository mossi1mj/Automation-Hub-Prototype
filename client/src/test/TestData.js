import Ansible from "./images/Ansible.png";
import Ben from "./images/Ben.png";
import Myron from "./images/Myron.jpeg";
import Python from "./images/Python.png";
import React from "./images/React.png";
import Zach from "./images/Zach.png";

export const data = [
  {
    index: 0,
    image: Ansible,
    title: "Pod Restart Script",
    description:
      "Triggers Ansible job to restart and switch Openshift pods via Pyton script",
    labels: [
      { key: 0, label: "Python", color: "green" },
      { key: 1, label: "BitBucket", color: "blue" },
      { key: 2, label: "Ansible", color: "red" },
      { key: 3, label: "Openshift", color: "purple" },
    ],
    score: 21258,
    name: "Ben Scruggs",
    role: "Automation Engineer",
    occupation: "SOW Based Worker",
    profile: Ben,
  },
  {
    index: 1,
    image: Python,
    title: "Parse Audit Data",
    description:
      "Pulls audit information from S3 bucket into PowerBI in the correct format.",
    labels: [
      { key: 0, label: "Python", color: "green" },
      { key: 1, label: "S3", color: "blue" },
      { key: 2, label: "PowerBI", color: "grey" },
    ],
    score: 9658,
    name: "Zachary Rubin",
    role: "Automation Engineer",
    occupation: "SOW Based Worker",
    profile: Zach,
  },
  {
    index: 2,
    image: React,
    title: "Component Library",
    description: "Component library for React with MaterialUI built in.",
    labels: [
      { key: 0, label: "React", color: "blue" },
      { key: 1, label: "GitLab", color: "orange" },
    ],
    score: 9542,
    name: "Myron Moss",
    role: "Associate Engineer",
    occupation: "Software Engineer",
    profile: Myron,
  },
];

export const metrics = [
  {
    index: 0,
    title: "Time Reduced",
    metric: 68,
  },
  {
    index: 1,
    title: "Cost Saved",
    metric: 50,
  },
  {
    index: 2,
    title: "Total Automations",
    metric: 124,
  },
  {
    index: 3,
    title: "Tools Recorded",
    metric: 17,
  },
];
