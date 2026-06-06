// src/data/projects-data.ts

interface Project {
  title: string;
  techStack: string[];
  description: string;
  link: {
    label: string;
    href: string;
  };
  stars: number;
  forks: number;
  issues: number;
  lastUpdated: string;
  lastCommit: string;
}

export const PROJECTS: Project[] = [
  {
    "title": "Real-World DevOps Projects",
    "techStack": [
      "DevOps",
      "Projects"
    ],
    "description": "Real-world DevOps projects from beginner to advanced levels.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Projects",
      "href": "https://github.com/NotHarshhaa/DevOps-Projects"
    },
    "stars": 4281,
    "forks": 4110,
    "issues": 23,
    "lastUpdated": "2026-06-06T13:01:01Z",
    "lastCommit": "a38cc0fc72d8d127c8eeaf0a16b7724fb9aba7f1"
  },
  {
    "title": "DevOps Interview Questions",
    "techStack": [
      "DevOps",
      "Interview"
    ],
    "description": "550+ DevOps interview questions with detailed answers covering CI/CD, Kubernetes, Terraform, and cloud.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Interview-Questions",
      "href": "https://github.com/NotHarshhaa/DevOps-Interview-Questions"
    },
    "stars": 910,
    "forks": 674,
    "issues": 2,
    "lastUpdated": "2026-06-06T08:41:29Z",
    "lastCommit": "4dc7fb875a13d34cd91071005cabd414f0d65166"
  },
  {
    "title": "Into the DevOps",
    "techStack": [
      "DevOps"
    ],
    "description": "Comprehensive DevOps interview guide covering Linux, AWS, Kubernetes, Terraform, Docker, and more.",
    "link": {
      "label": "github.com/NotHarshhaa/into-the-devops",
      "href": "https://github.com/NotHarshhaa/into-the-devops"
    },
    "stars": 868,
    "forks": 519,
    "issues": 0,
    "lastUpdated": "2026-06-05T15:06:18Z",
    "lastCommit": "1fef40a47764021ca15eb1e227502a6e64787176"
  },
  {
    "title": "Kubernetes Learning Path",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Step-by-step Kubernetes learning path from beginner to advanced.",
    "link": {
      "label": "github.com/NotHarshhaa/kubernetes-learning-path",
      "href": "https://github.com/NotHarshhaa/kubernetes-learning-path"
    },
    "stars": 546,
    "forks": 217,
    "issues": 4,
    "lastUpdated": "2026-06-03T22:28:41Z",
    "lastCommit": "734c2cf7233dcca42bbb66203b764f4a462e00dd"
  },
  {
    "title": "Kubernetes Learning Projects",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Practical Kubernetes projects to master deployment, management, and scaling of containerized applications.",
    "link": {
      "label": "github.com/NotHarshhaa/kubernetes-projects-learning",
      "href": "https://github.com/NotHarshhaa/kubernetes-projects-learning"
    },
    "stars": 344,
    "forks": 244,
    "issues": 1,
    "lastUpdated": "2026-06-01T22:53:02Z",
    "lastCommit": "dee8ff4607954972994dedc5689390ffd8ad01b7"
  },
  {
    "title": "DevOps Cheatsheet",
    "techStack": [
      "DevOps"
    ],
    "description": "Quick-reference DevOps cheatsheets covering CI/CD, cloud, security, monitoring, and automation.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-cheatsheet",
      "href": "https://github.com/NotHarshhaa/devops-cheatsheet"
    },
    "stars": 314,
    "forks": 241,
    "issues": 3,
    "lastUpdated": "2026-06-05T15:47:26Z",
    "lastCommit": "d433174187b1718521bbeb45689a25444fb515b2"
  },
  {
    "title": "DevOps Tools Collection",
    "techStack": [
      "DevOps"
    ],
    "description": "Collection of essential DevOps tools for development, deployment, monitoring, security, and automation.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-tools",
      "href": "https://github.com/NotHarshhaa/devops-tools"
    },
    "stars": 226,
    "forks": 161,
    "issues": 3,
    "lastUpdated": "2026-06-01T01:01:52Z",
    "lastCommit": "cd2efbc8b4fb93c9f5d2bc4894f268dd8970883e"
  },
  {
    "title": "Kubernetes Mastery Guide",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Comprehensive Kubernetes learning and deployment repository from basic to advanced.",
    "link": {
      "label": "github.com/NotHarshhaa/Kubernetes",
      "href": "https://github.com/NotHarshhaa/Kubernetes"
    },
    "stars": 185,
    "forks": 199,
    "issues": 0,
    "lastUpdated": "2026-06-02T18:02:10Z",
    "lastCommit": "eb392ed77959fe8147848a94e1c83caab235b9b5"
  },
  {
    "title": "DevOps Setup & Installation Guides",
    "techStack": [
      "DevOps"
    ],
    "description": "Guides for installing and setting up essential DevOps and DevSecOps tools.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps_Setup-Installations",
      "href": "https://github.com/NotHarshhaa/DevOps_Setup-Installations"
    },
    "stars": 185,
    "forks": 199,
    "issues": 0,
    "lastUpdated": "2026-05-27T15:34:56Z",
    "lastCommit": "e44b1dde5f78d1687e8f804ffbe28eff73e2c4b3"
  },
  {
    "title": "Certified Kubernetes Administrator (CKA) Prep",
    "techStack": [
      "Kubernetes"
    ],
    "description": "Master Kubernetes from scratch and prepare for the CKA certification.",
    "link": {
      "label": "github.com/NotHarshhaa/Certified_Kubernetes_Administrator",
      "href": "https://github.com/NotHarshhaa/Certified_Kubernetes_Administrator"
    },
    "stars": 158,
    "forks": 118,
    "issues": 0,
    "lastUpdated": "2026-06-01T01:01:42Z",
    "lastCommit": "0a7687b7f90931b824ea425b8b9d2372c683cd2a"
  },
  {
    "title": "CI/CD on EKS using GitHub Actions",
    "techStack": [
      "CI/CD",
      "EKS",
      "GitHub Actions",
      "Terraform"
    ],
    "description": "CI/CD pipeline for deploying a Node.js app on Amazon EKS using GitHub Actions, Terraform, and Kubernetes.",
    "link": {
      "label": "github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions",
      "href": "https://github.com/NotHarshhaa/CI-CD_EKS-GitHub_Actions"
    },
    "stars": 131,
    "forks": 115,
    "issues": 1,
    "lastUpdated": "2026-05-25T08:21:16Z",
    "lastCommit": "c83c2739ba8385db73508b7a31852fc7aa64918e"
  },
  {
    "title": "AWS GCP Azure Cloud Projects Workshop",
    "techStack": [
      "Amazon Web Services",
      "Aws",
      "Azure",
      "Cloud Projects"
    ],
    "description": "A complete, hands-on collection of AWS, Google Cloud (GCP), and Microsoft Azure projects designed to help you gain real-world experience, build your portfoli...",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop",
      "href": "https://github.com/NotHarshhaa/AWS-GCP-Azure-Cloud-Projects-Workshop"
    },
    "stars": 98,
    "forks": 41,
    "issues": 0,
    "lastUpdated": "2026-05-24T16:47:33Z",
    "lastCommit": "2918d6d05e02dd981ef9a89bcf7202afde64d6e3"
  },
  {
    "title": "AWS Projects",
    "techStack": [
      "Aws",
      "Aws Apigateway",
      "Aws Cli",
      "Aws Cloud"
    ],
    "description": "Real-world AWS projects for aspiring cloud engineers — Beginner to Advanced. Covers AWS services, Infrastructure as Code, CI/CD, containers, serverless, moni...",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-Projects",
      "href": "https://github.com/NotHarshhaa/AWS-Projects"
    },
    "stars": 95,
    "forks": 41,
    "issues": 0,
    "lastUpdated": "2026-06-05T21:06:12Z",
    "lastCommit": "c942afb83427ab02b475685461c7b3e0b0a1fd84"
  },
  {
    "title": "Azure Cloud Resources Hub",
    "techStack": [
      "Azure"
    ],
    "description": "Curated list of Azure resources, libraries, guides, and blogs.",
    "link": {
      "label": "github.com/NotHarshhaa/azure-all_in_one",
      "href": "https://github.com/NotHarshhaa/azure-all_in_one"
    },
    "stars": 89,
    "forks": 60,
    "issues": 0,
    "lastUpdated": "2026-05-25T08:21:15Z",
    "lastCommit": "c5d20e6f4d6006e8d87d54b0f9e264360e18c4c3"
  },
  {
    "title": "Amazon EKS Cluster with Terraform",
    "techStack": [
      "Terraform",
      "EKS"
    ],
    "description": "Terraform-based provisioning of an Amazon EKS Cluster for Kubernetes deployments.",
    "link": {
      "label": "github.com/NotHarshhaa/eks-cluster-terraform",
      "href": "https://github.com/NotHarshhaa/eks-cluster-terraform"
    },
    "stars": 73,
    "forks": 67,
    "issues": 0,
    "lastUpdated": "2026-05-25T08:21:07Z",
    "lastCommit": "85af1d99301781702234e86fabf16213bbdeddf1"
  },
  {
    "title": "DevOps Tool Installer Scripts",
    "techStack": [
      "Automation"
    ],
    "description": "Automated installation/uninstallation scripts for essential DevOps tools on Linux and Windows.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Tool-Installer",
      "href": "https://github.com/NotHarshhaa/DevOps-Tool-Installer"
    },
    "stars": 62,
    "forks": 69,
    "issues": 0,
    "lastUpdated": "2026-05-25T08:21:27Z",
    "lastCommit": "18d7d06cc018f82eede8f098ec01b86fa6fb489e"
  },
  {
    "title": "Secure Kubernetes Dashboard",
    "techStack": [
      "Kubernetes",
      "Security"
    ],
    "description": "Kubernetes dashboard with integrated health checks and Trivy scanning.",
    "link": {
      "label": "github.com/NotHarshhaa/kubernetes-dashboard",
      "href": "https://github.com/NotHarshhaa/kubernetes-dashboard"
    },
    "stars": 57,
    "forks": 53,
    "issues": 0,
    "lastUpdated": "2026-05-25T08:21:15Z",
    "lastCommit": "c4f02b6e1faed85bd743bae193cb2d3af04d3ef3"
  },
  {
    "title": "AWS Billing Alert with Terraform",
    "techStack": [
      "Terraform",
      "AWS"
    ],
    "description": "Terraform module for setting up AWS billing alerts.",
    "link": {
      "label": "github.com/NotHarshhaa/aws-billing-alert-terraform",
      "href": "https://github.com/NotHarshhaa/aws-billing-alert-terraform"
    },
    "stars": 57,
    "forks": 56,
    "issues": 0,
    "lastUpdated": "2026-05-25T08:21:15Z",
    "lastCommit": "0c80125fb75a3fba44c02bc92e039aefb6627877"
  },
  {
    "title": "Real-Time AWS DevOps Deployment",
    "techStack": [
      "AWS",
      "DevOps"
    ],
    "description": "End-to-end AWS DevOps deployment pipeline from Dev to Production.",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment",
      "href": "https://github.com/NotHarshhaa/AWS-DevOps_Real-Time_Deployment"
    },
    "stars": 27,
    "forks": 65,
    "issues": 0,
    "lastUpdated": "2026-02-16T16:41:08Z",
    "lastCommit": "05fdaf765530612930ae6d605bfec0e54e2a2ea0"
  },
  {
    "title": "From Docker to Kubernetes",
    "techStack": [
      "Docker",
      "Kubernetes"
    ],
    "description": "A comprehensive open source learning platform end-to-end from Docker to Kubernetes for containerized applications.",
    "link": {
      "label": "github.com/NotHarshhaa/From-Docker-to-Kubernetes",
      "href": "https://github.com/NotHarshhaa/From-Docker-to-Kubernetes"
    },
    "stars": 27,
    "forks": 33,
    "issues": 1,
    "lastUpdated": "2026-05-19T07:41:11Z",
    "lastCommit": "79fbf1f0128c7b2d4f09f9d31d8eed896219f110"
  },
  {
    "title": "Cloud Native DevOps Project",
    "techStack": [
      "Cloud",
      "DevOps",
      "Kubernetes"
    ],
    "description": "Build & deploy a Cloud-Native Full-Stack Application using Terraform, Jenkins, Docker & Kubernetes – all on AWS!",
    "link": {
      "label": "github.com/NotHarshhaa/Cloud-Native-DevOps-Project",
      "href": "https://github.com/NotHarshhaa/Cloud-Native-DevOps-Project"
    },
    "stars": 23,
    "forks": 34,
    "issues": 0,
    "lastUpdated": "2026-06-05T00:48:06Z",
    "lastCommit": "b9abb4e7ac0f05a45dfc0cd22fa65ce4dfd2b03b"
  },
  {
    "title": "Learning Prometheus Monitoring",
    "techStack": [
      "Prometheus",
      "Monitoring"
    ],
    "description": "Repository for learning and implementing Prometheus monitoring in Kubernetes environments.",
    "link": {
      "label": "github.com/NotHarshhaa/Learning-Prometheus",
      "href": "https://github.com/NotHarshhaa/Learning-Prometheus"
    },
    "stars": 21,
    "forks": 43,
    "issues": 0,
    "lastUpdated": "2026-05-11T20:35:12Z",
    "lastCommit": "c79e4344f3531c08ab27ced74bfa2b018d8fe4e0"
  },
  {
    "title": "Provisioning EKS on AWS with Terraform",
    "techStack": [
      "AWS",
      "EKS",
      "Terraform"
    ],
    "description": "Provision Amazon EKS Cluster on AWS using Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-EKS_Terraform",
      "href": "https://github.com/NotHarshhaa/AWS-EKS_Terraform"
    },
    "stars": 20,
    "forks": 56,
    "issues": 0,
    "lastUpdated": "2026-02-21T13:00:58Z",
    "lastCommit": "bd77ff8270a7ac5c75a126c8a05a4ff2f32e6563"
  },
  {
    "title": "AWS Terraform Workshop",
    "techStack": [
      "Terraform",
      "AWS"
    ],
    "description": "Beginner-friendly guide to setting up AWS infrastructure using Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/AWS-Terraform-Workshop",
      "href": "https://github.com/NotHarshhaa/AWS-Terraform-Workshop"
    },
    "stars": 18,
    "forks": 23,
    "issues": 0,
    "lastUpdated": "2026-06-04T09:26:19Z",
    "lastCommit": "dc06ce5ad9f1db755497112ed59a65cbfc1379b9"
  },
  {
    "title": "Zomato Clone with DevSecOps",
    "techStack": [
      "Full-Stack",
      "DevSecOps"
    ],
    "description": "Full-stack food delivery application inspired by Zomato with DevSecOps integration.",
    "link": {
      "label": "github.com/NotHarshhaa/Zomato-Clone",
      "href": "https://github.com/NotHarshhaa/Zomato-Clone"
    },
    "stars": 15,
    "forks": 77,
    "issues": 0,
    "lastUpdated": "2026-03-13T05:44:05Z",
    "lastCommit": "823466a188d4853ca15308d6194a49d04582b685"
  },
  {
    "title": "DevOps Monitoring in a Box",
    "techStack": [
      "Prometheus",
      "Grafana"
    ],
    "description": "A Advanced DevOps Open Source Monitoring Platform to monitor and manage infrastructure and applications using Prometheus, Grafana, and other tools.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-monitoring-in-a-box",
      "href": "https://github.com/NotHarshhaa/devops-monitoring-in-a-box"
    },
    "stars": 14,
    "forks": 16,
    "issues": 0,
    "lastUpdated": "2026-05-11T20:34:49Z",
    "lastCommit": "ef41c2c28229583a9392b760901cb1eb0289a609"
  },
  {
    "title": "Deploy Super Mario on EKS",
    "techStack": [
      "Kubernetes",
      "Terraform"
    ],
    "description": "Deploy Super Mario game on Amazon EKS using Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform",
      "href": "https://github.com/NotHarshhaa/Deployment-of-super-Mario-on-Kubernetes-using-terraform"
    },
    "stars": 11,
    "forks": 32,
    "issues": 0,
    "lastUpdated": "2026-02-03T07:07:11Z",
    "lastCommit": "882896355b69b1f3a94deed097829db93756f1ae"
  },
  {
    "title": "DevOps Project Templates",
    "techStack": [
      "HCL",
      "Terraform",
      "DevOps",
      "Templates"
    ],
    "description": "A collection of production-ready DevOps & Cloud project templates designed for DevOps Engineers, Cloud Engineers, and Platform Engineers.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-project-templates",
      "href": "https://github.com/NotHarshhaa/devops-project-templates"
    },
    "stars": 11,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2026-05-17T18:31:41Z",
    "lastCommit": "6a322f381ee00547ce805cefbe44570763122679"
  },
  {
    "title": "ECR to ECS Deployment with GitHub Actions",
    "techStack": [
      "Terraform",
      "ECS",
      "GitHub Actions",
      "Docker"
    ],
    "description": "Automated deployment of a Python application to AWS ECS using GitHub Actions, Docker, and Terraform.",
    "link": {
      "label": "github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy",
      "href": "https://github.com/NotHarshhaa/tf-ecr-ecs-gh-deploy"
    },
    "stars": 10,
    "forks": 21,
    "issues": 0,
    "lastUpdated": "2026-05-27T06:25:32Z",
    "lastCommit": "76a6209746bbf4c0fa3463bcc89ea9fad47ec9d1"
  },
  {
    "title": "AWS Infra with Jenkins and Terraform",
    "techStack": [
      "Jenkins",
      "Terraform",
      "AWS"
    ],
    "description": "Terraform scripts for AWS infrastructure provisioning with Jenkins integration.",
    "link": {
      "label": "github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra",
      "href": "https://github.com/NotHarshhaa/Jenkins-Terraform-AWS-Infra"
    },
    "stars": 10,
    "forks": 25,
    "issues": 0,
    "lastUpdated": "2026-04-26T11:51:26Z",
    "lastCommit": "2fec48f59b8ea0a59f03314763fe18fc4fe05fbd"
  },
  {
    "title": "Cv Portfolio",
    "techStack": [
      "Cv",
      "Javascript",
      "Nextjs",
      "Personal Cv"
    ],
    "description": "🌐 A personal CV website built with Next.js, Tailwind CSS, and TypeScript — responsive, printable, and perfect for showcasing professional experience online.",
    "link": {
      "label": "github.com/NotHarshhaa/cv-portfolio",
      "href": "https://github.com/NotHarshhaa/cv-portfolio"
    },
    "stars": 10,
    "forks": 11,
    "issues": 0,
    "lastUpdated": "2026-04-24T11:05:26Z",
    "lastCommit": "85489143b779d9dd56e136caab60bead0e2e7370"
  },
  {
    "title": "Awesome DevOps Cloud",
    "techStack": [
      "DevOps",
      "Cloud"
    ],
    "description": "A curated list for DevOps and Cloud Engineering. Explore the most useful tools, platforms, utilities, and guides — beautifully categorized and easily searchable in one place.",
    "link": {
      "label": "github.com/NotHarshhaa/awesome-devops-cloud",
      "href": "https://github.com/NotHarshhaa/awesome-devops-cloud"
    },
    "stars": 9,
    "forks": 11,
    "issues": 5,
    "lastUpdated": "2026-05-29T12:46:05Z",
    "lastCommit": "d0a9a3bca984b55babd7750e7159faa4b61d2192"
  },
  {
    "title": "Cloud-Native Monitoring App",
    "techStack": [
      "Python",
      "Docker",
      "EKS"
    ],
    "description": "Monitoring app built with Python, containerized with Docker, and deployed to EKS.",
    "link": {
      "label": "github.com/NotHarshhaa/cloud-native-monitoring-app",
      "href": "https://github.com/NotHarshhaa/cloud-native-monitoring-app"
    },
    "stars": 7,
    "forks": 18,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:04:31Z",
    "lastCommit": "15102a44dc31d8f340e4ae1ca83db337b488c483"
  },
  {
    "title": "DevOps Environment Toolkit for Beginners",
    "techStack": [
      "Docker",
      "Kubernetes",
      "Jenkins"
    ],
    "description": "A Beginners DevOps Environment Toolkit for Beginners to setup a Local DevOps environment using tools like Docker, Kubernetes, and Jenkins.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-environment-toolkit-beginners",
      "href": "https://github.com/NotHarshhaa/devops-environment-toolkit-beginners"
    },
    "stars": 7,
    "forks": 5,
    "issues": 0,
    "lastUpdated": "2026-06-02T16:44:32Z",
    "lastCommit": "fa4bdc02a6e9fdf5c8f48faf9661c0bd411ab9b0"
  },
  {
    "title": "GitHub Repo Status Tracker",
    "techStack": [
      "TypeScript"
    ],
    "description": "This project automates the tracking of multiple GitHub repositories, providing a real-time status update on key repository metrics. The status information is...",
    "link": {
      "label": "github.com/NotHarshhaa/github-repo-status-tracker",
      "href": "https://github.com/NotHarshhaa/github-repo-status-tracker"
    },
    "stars": 7,
    "forks": 15,
    "issues": 0,
    "lastUpdated": "2026-06-06T08:37:01Z",
    "lastCommit": "1f889fbdc9ae628dbfe91ca30987c426d0975927"
  },
  {
    "title": "Links Portfolio",
    "techStack": [
      "Css",
      "Javascript",
      "Links",
      "Nextjs"
    ],
    "description": "✨ Links to my social media.",
    "link": {
      "label": "github.com/NotHarshhaa/links-portfolio",
      "href": "https://github.com/NotHarshhaa/links-portfolio"
    },
    "stars": 7,
    "forks": 8,
    "issues": 0,
    "lastUpdated": "2026-04-27T07:31:12Z",
    "lastCommit": "83efa408a5b90ee1699718fb71a49f8163f856ae"
  },
  {
    "title": "Prodevopsguytech Com",
    "techStack": [
      "Javascript",
      "Nextjs",
      "Tailwindcss",
      "Typescript"
    ],
    "description": "Web of ProDevOpsGuy Tech is a passionate community built for DevOps and Cloud enthusiasts, learners, and professionals. Our mission is to empower individuals...",
    "link": {
      "label": "github.com/NotHarshhaa/prodevopsguytech.com",
      "href": "https://github.com/NotHarshhaa/prodevopsguytech.com"
    },
    "stars": 7,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2025-09-20T15:11:52Z",
    "lastCommit": "502ddc5f8000c7825e970b2bf866c47f89aa69c6"
  },
  {
    "title": "Uber Clone with DevSecOps",
    "techStack": [
      "Full-Stack",
      "DevSecOps"
    ],
    "description": "Full-stack Uber-like transportation application with DevSecOps integration.",
    "link": {
      "label": "github.com/NotHarshhaa/uber-clone",
      "href": "https://github.com/NotHarshhaa/uber-clone"
    },
    "stars": 6,
    "forks": 12,
    "issues": 0,
    "lastUpdated": "2026-02-09T10:06:59Z",
    "lastCommit": "d54f10fc513fc2fdd33f92041ae0f9dfaac36c43"
  },
  {
    "title": "AI Platform Engineering Handbook",
    "techStack": [
      "DevOps"
    ],
    "description": "Production-grade DevOps, MLOps, and Platform Engineering documentation with real-world AI infrastructure design, automation pipelines, and cloud-native archi...",
    "link": {
      "label": "github.com/NotHarshhaa/ai-platform-engineering-handbook",
      "href": "https://github.com/NotHarshhaa/ai-platform-engineering-handbook"
    },
    "stars": 7,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2026-06-05T12:57:39Z",
    "lastCommit": "499884fd88a102efd9311ff30352d46e78a18dd7"
  },
  {
    "title": "DevOps Tools Setups & Installations",
    "techStack": [
      "TypeScript"
    ],
    "description": "Master DevOps Tools Installation & Configuration — Your comprehensive guide to setting up a professional DevOps environment with step-by-step tutorials and b...",
    "link": {
      "label": "github.com/NotHarshhaa/devops-tools-setups-installations",
      "href": "https://github.com/NotHarshhaa/devops-tools-setups-installations"
    },
    "stars": 6,
    "forks": 10,
    "issues": 0,
    "lastUpdated": "2026-05-09T18:19:37Z",
    "lastCommit": "b35a85123c3a5e8d219bee80742cb32cf0b4f446"
  },
  {
    "title": "Projects Prodevopsguytech Com",
    "techStack": [
      "Css",
      "Devops",
      "Devops Learning",
      "Devops Practice Project Space"
    ],
    "description": "A website showcasing a curated list of major real-time DevOps and Cloud projects, ranging from beginner to advanced levels. Built using Next.js and styled wi...",
    "link": {
      "label": "github.com/NotHarshhaa/projects.prodevopsguytech.com",
      "href": "https://github.com/NotHarshhaa/projects.prodevopsguytech.com"
    },
    "stars": 6,
    "forks": 8,
    "issues": 0,
    "lastUpdated": "2025-12-29T08:55:23Z",
    "lastCommit": "4abff3ade0bf0abac6dbe3d5e8897befd5bfc325"
  },
  {
    "title": "Interviews Prodevopsguytech Com",
    "techStack": [
      "TypeScript"
    ],
    "description": "This project powers a modern web UI designed to help DevOps professionals prepare for interviews with curated, categorized, and regularly updated questions.",
    "link": {
      "label": "github.com/NotHarshhaa/interviews.prodevopsguytech.com",
      "href": "https://github.com/NotHarshhaa/interviews.prodevopsguytech.com"
    },
    "stars": 5,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2026-03-04T00:51:34Z",
    "lastCommit": "fd5d26969e6907f9b1aae0e57a738946870e88b8"
  },
  {
    "title": "Prodevopsguy Xyz",
    "techStack": [
      "Astro"
    ],
    "description": "A minimal, accessible and SEO-friendly Astro blog theme",
    "link": {
      "label": "github.com/NotHarshhaa/prodevopsguy.xyz",
      "href": "https://github.com/NotHarshhaa/prodevopsguy.xyz"
    },
    "stars": 5,
    "forks": 2,
    "issues": 1,
    "lastUpdated": "2025-02-22T19:57:13Z",
    "lastCommit": "97fb1167d78a6f050c4031432dc5f5f5a5b1de5a"
  },
  {
    "title": "DevOps Engineering",
    "techStack": [
      "DevOps",
      "Engineering"
    ],
    "description": "A comprehensive guide to DevOps engineering, covering the entire lifecycle of a software project from development to deployment.",
    "link": {
      "label": "github.com/NotHarshhaa/DevOps-Engineering",
      "href": "https://github.com/NotHarshhaa/DevOps-Engineering"
    },
    "stars": 4,
    "forks": 9,
    "issues": 0,
    "lastUpdated": "2025-12-18T10:58:39Z",
    "lastCommit": "b3c5d433b8298ecf28baae97aa5ec030bb95f038"
  },
  {
    "title": "Personal Portfolio",
    "techStack": [
      "Css",
      "Javascript",
      "Nodejs",
      "Tailwindcss"
    ],
    "description": "✨ My personal portfolio showcasing my work and skills.",
    "link": {
      "label": "github.com/NotHarshhaa/personal-portfolio",
      "href": "https://github.com/NotHarshhaa/personal-portfolio"
    },
    "stars": 4,
    "forks": 6,
    "issues": 0,
    "lastUpdated": "2026-04-24T11:15:28Z",
    "lastCommit": "5c0e04466c0e788819a0cbf47b6a7a24b4997f13"
  },
  {
    "title": "Jobs Prodevopsguytech Com",
    "techStack": [
      "Devopsjobs",
      "Job Board",
      "Job Portal",
      "Jobs Search"
    ],
    "description": "Find your dream DevOps, SRE, Platform Engineering, and Cloud jobs — all in one place. No ads. No fees. Just high-quality job listings updated daily. [COMING ...",
    "link": {
      "label": "github.com/NotHarshhaa/jobs.prodevopsguytech.com",
      "href": "https://github.com/NotHarshhaa/jobs.prodevopsguytech.com"
    },
    "stars": 4,
    "forks": 2,
    "issues": 0,
    "lastUpdated": "2026-02-22T15:07:20Z",
    "lastCommit": "1ec416a57a8e06739aecf4c504308bf6b369f880"
  },
  {
    "title": "Home of Best DevOps Resources",
    "techStack": [
      "TypeScript",
      "Next.js",
      "React",
      "TailwindCSS"
    ],
    "description": "A curated collection of the \"Home of Best DevOps resources\" — with live UI demos and GitHub source links.",
    "link": {
      "label": "github.com/NotHarshhaa/home-of-best-devops-resources",
      "href": "https://github.com/NotHarshhaa/home-of-best-devops-resources"
    },
    "stars": 3,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2025-12-18T11:01:30Z",
    "lastCommit": "4d1f9a8bb77876cca4b5d05654dc198667cb18ed"
  },
  {
    "title": "AWS Infra Generator",
    "techStack": [
      "Aws",
      "Aws Infra",
      "Aws Infra Gen",
      "Aws Infrastructure Automation"
    ],
    "description": "A platform engineering tool that generates production-ready AWS infrastructure templates using Terraform or CloudFormation based on user-selected services.",
    "link": {
      "label": "github.com/NotHarshhaa/aws-infra-generator",
      "href": "https://github.com/NotHarshhaa/aws-infra-generator"
    },
    "stars": 3,
    "forks": 4,
    "issues": 0,
    "lastUpdated": "2026-05-25T13:10:45Z",
    "lastCommit": "4dcc27555e984181431ec82952ffa818d0dca873"
  },
  {
    "title": "Status Prodevopsguytech Com",
    "techStack": [
      "JavaScript"
    ],
    "description": "A modern, responsive status dashboard for monitoring the health and up-time of our web services and applications.",
    "link": {
      "label": "github.com/NotHarshhaa/status.prodevopsguytech.com",
      "href": "https://github.com/NotHarshhaa/status.prodevopsguytech.com"
    },
    "stars": 3,
    "forks": 8,
    "issues": 0,
    "lastUpdated": "2026-05-25T06:58:56Z",
    "lastCommit": "c68e5af9002337e9060e87263e53da039214a07a"
  },
  {
    "title": "K8s Learning Platform",
    "techStack": [
      "TypeScript"
    ],
    "description": "A comprehensive learning platform covering Kubernetes administration, Helm package management, operators, and monitoring. Master K8s with hands-on examples, ...",
    "link": {
      "label": "github.com/NotHarshhaa/k8s-learning-platform",
      "href": "https://github.com/NotHarshhaa/k8s-learning-platform"
    },
    "stars": 3,
    "forks": 4,
    "issues": 0,
    "lastUpdated": "2026-01-13T22:43:56Z",
    "lastCommit": "b0dc30592f1c62cdd9b81088d84ab37d87fa9c48"
  },
  {
    "title": "Cheatsheet Prodevopsguytech Com",
    "techStack": [
      "DevOps"
    ],
    "description": "Welcome to the DevOps Tools Cheatsheet Collection (UI-BASED) – your go-to resource for mastering DevOps tools and technologies!",
    "link": {
      "label": "github.com/NotHarshhaa/cheatsheet.prodevopsguytech.com",
      "href": "https://github.com/NotHarshhaa/cheatsheet.prodevopsguytech.com"
    },
    "stars": 3,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2025-12-18T09:17:35Z",
    "lastCommit": "bbbbbb4721e7e3dbe971bd03edad3aaf7455369f"
  },
  {
    "title": "Prodevopsguy Hashnode Dev",
    "techStack": [
      "DevOps"
    ],
    "description": "Backups of my blogs",
    "link": {
      "label": "github.com/NotHarshhaa/prodevopsguy.hashnode.dev",
      "href": "https://github.com/NotHarshhaa/prodevopsguy.hashnode.dev"
    },
    "stars": 3,
    "forks": 10,
    "issues": 0,
    "lastUpdated": "2025-11-23T06:50:31Z",
    "lastCommit": "ef6cd275ae9734bd3b8d21feb83993374f383ef4"
  },
  {
    "title": "DevOps Project Generator",
    "techStack": [
      "Python",
      "CLI",
      "DevOps",
      "Automation"
    ],
    "description": "A CLI Tool that generates production-ready DevOps repositories based on user-selected options like CI/CD, infrastructure, deployment, environments, observability, and security.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-project-generator",
      "href": "https://github.com/NotHarshhaa/devops-project-generator"
    },
    "stars": 2,
    "forks": 7,
    "issues": 0,
    "lastUpdated": "2026-05-25T16:34:32Z",
    "lastCommit": "730d8af09315cd838f98d7daa920e05d291b562e"
  },
  {
    "title": "Cloud Billing Automation",
    "techStack": [
      "Python",
      "Cloud",
      "Automation",
      "Cost Management"
    ],
    "description": "A DevOps-focused cloud billing automation tool that enables Cloud and DevOps Engineers to monitor, govern, and optimize cloud costs using automated scripts, alerts, and infrastructure cost controls.",
    "link": {
      "label": "github.com/NotHarshhaa/cloud-billing-automation",
      "href": "https://github.com/NotHarshhaa/cloud-billing-automation"
    },
    "stars": 2,
    "forks": 6,
    "issues": 0,
    "lastUpdated": "2026-05-01T10:34:12Z",
    "lastCommit": "a63df46cd7a3dda1db69cd0218bd86a2b3da9530"
  },
  {
    "title": "Terraform Cost Predictor",
    "techStack": [
      "TypeScript"
    ],
    "description": "Terraform Cost Predictor is an ML-powered tool that analyzes Terraform infrastructure configurations and predicts the estimated monthly cloud cost before dep...",
    "link": {
      "label": "github.com/NotHarshhaa/terraform-cost-predictor",
      "href": "https://github.com/NotHarshhaa/terraform-cost-predictor"
    },
    "stars": 2,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2026-05-30T17:31:30Z",
    "lastCommit": "14f7789df80c5702089de5c8c5f793f40cb1465d"
  },
  {
    "title": "MLflow K8s Operator",
    "techStack": [
      "Ai",
      "Data Scientist",
      "Kubernetes",
      "Kubernetes Operator"
    ],
    "description": "A Kubernetes operator that auto-provisions MLflow tracking servers, model registries, and artifact stores as CRDs so data scientists never touch kubectl.",
    "link": {
      "label": "github.com/NotHarshhaa/mlflow-k8s-operator",
      "href": "https://github.com/NotHarshhaa/mlflow-k8s-operator"
    },
    "stars": 2,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-15T13:10:52Z",
    "lastCommit": "9653fc237f4e1b472f15309d09bb46126e52ea97"
  },
  {
    "title": "AI Question Paper Generator",
    "techStack": [
      "TypeScript"
    ],
    "description": "An intelligent system that automatically generates university-style question papers using NLP and Machine Learning techniques.",
    "link": {
      "label": "github.com/NotHarshhaa/ai-question-paper-generator",
      "href": "https://github.com/NotHarshhaa/ai-question-paper-generator"
    },
    "stars": 2,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2026-05-05T09:49:32Z",
    "lastCommit": "157b37d8a957a2460655c35419fe609f845dd668"
  },
  {
    "title": "Personal Blog",
    "techStack": [
      "Blog",
      "Devops Blogs",
      "Javascript",
      "Nextjs"
    ],
    "description": "A personal blog site for DevOps & Cloud Space based on Typescript, Next.js, TailwindCSS.",
    "link": {
      "label": "github.com/NotHarshhaa/personal-blog",
      "href": "https://github.com/NotHarshhaa/personal-blog"
    },
    "stars": 2,
    "forks": 4,
    "issues": 0,
    "lastUpdated": "2026-04-24T11:06:27Z",
    "lastCommit": "21d26f2d4dfea25365707cfe4ce50797f548904d"
  },
  {
    "title": "Prodevopsguytech V2",
    "techStack": [
      "Cloud",
      "Devops",
      "Devops Community",
      "Nextjs14"
    ],
    "description": "Home of ProDevOpsGuy Tech Community Website",
    "link": {
      "label": "github.com/NotHarshhaa/prodevopsguytech-v2",
      "href": "https://github.com/NotHarshhaa/prodevopsguytech-v2"
    },
    "stars": 2,
    "forks": 2,
    "issues": 0,
    "lastUpdated": "2026-04-20T11:40:35Z",
    "lastCommit": "67e44e0a5ea73e47005bfe03d0ce033e775f2e26"
  },
  {
    "title": "KubeGuardian",
    "techStack": [
      "Go",
      "Kubernetes",
      "Monitoring",
      "Automation"
    ],
    "description": "KubeGuardian is an open-source Kubernetes automation tool that continuously monitors cluster health, detects common failures, and automatically remediates issues — reducing downtime, pager alerts, and manual firefighting for DevOps & SRE teams.",
    "link": {
      "label": "github.com/NotHarshhaa/kubeguardian",
      "href": "https://github.com/NotHarshhaa/kubeguardian"
    },
    "stars": 1,
    "forks": 2,
    "issues": 0,
    "lastUpdated": "2026-02-08T07:38:39Z",
    "lastCommit": "60a6f9cad9969651eb54b1598c68cb96a601d450"
  },
  {
    "title": "DevOps MCP Server",
    "techStack": [
      "Argocd",
      "Devops",
      "Gitops",
      "Kubectl"
    ],
    "description": "Unified MCP server for DevOps engineers — query and manage Kubernetes, ArgoCD, Prometheus, and PagerDuty from any MCP-compatible AI agent.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-mcp",
      "href": "https://github.com/NotHarshhaa/devops-mcp"
    },
    "stars": 1,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2026-05-29T11:46:00Z",
    "lastCommit": "c1b5044cc6e3bac1b87ee525bd87e71ed98f0ca9"
  },
  {
    "title": "Pipeline Forge",
    "techStack": [
      "TypeScript"
    ],
    "description": "Pipeline Forge is a developer-first tool that helps you create optimized, secure, and scalable CI/CD pipelines for modern applications without writing YAML f...",
    "link": {
      "label": "github.com/NotHarshhaa/pipeline-forge",
      "href": "https://github.com/NotHarshhaa/pipeline-forge"
    },
    "stars": 1,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2026-05-25T08:36:14Z",
    "lastCommit": "e09c0c7ca3e4afbb926d136ed6cbfd1dce254399"
  },
  {
    "title": "Jenkins Plus",
    "techStack": [
      "TypeScript"
    ],
    "description": "A batteries-included Jenkins distribution — 40+ pre-configured plugins, modern React dashboard, JCasC bootstrap, and one-command deployment via Docker, Helm,...",
    "link": {
      "label": "github.com/NotHarshhaa/jenkins-plus",
      "href": "https://github.com/NotHarshhaa/jenkins-plus"
    },
    "stars": 1,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-11T20:34:29Z",
    "lastCommit": "ef37afd0422dabdb0cce875c6e281340aacff0b4"
  },
  {
    "title": "Kube Ctx Manager",
    "techStack": [
      "Bash",
      "Context Switching",
      "Devops",
      "Fuzzy Search"
    ],
    "description": "A smart shell plugin for kubectl power users fuzzy context switching, auto-suggested aliases, and prod safeguards built right into your terminal.",
    "link": {
      "label": "github.com/NotHarshhaa/kube-ctx-manager",
      "href": "https://github.com/NotHarshhaa/kube-ctx-manager"
    },
    "stars": 1,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-08T03:41:12Z",
    "lastCommit": "153acfa316d4737439299fa746025829a61216b9"
  },
  {
    "title": "Drift Watchdog",
    "techStack": [
      "Python"
    ],
    "description": "A lightweight CLI + Prometheus exporter that continuously monitors ML model input/output distributions and fires alerts when drift is detected.",
    "link": {
      "label": "github.com/NotHarshhaa/drift-watchdog",
      "href": "https://github.com/NotHarshhaa/drift-watchdog"
    },
    "stars": 1,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-01T10:48:47Z",
    "lastCommit": "26e99afef1bf5dc402f4d4d58a769be807d3c079"
  },
  {
    "title": "Scoop Bucket",
    "techStack": [
      "DevOps"
    ],
    "description": "No description provided.",
    "link": {
      "label": "github.com/NotHarshhaa/scoop-bucket",
      "href": "https://github.com/NotHarshhaa/scoop-bucket"
    },
    "stars": 1,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-04-20T11:21:20Z",
    "lastCommit": "f04d7561fed0634eebffd76aa5fcd74bada42392"
  },
  {
    "title": "Internal Developer Platform CLI",
    "techStack": [
      "Python"
    ],
    "description": "A powerful CLI & Web tool that enables self-service infrastructure and service creation for developers, following modern Platform Engineering principles.",
    "link": {
      "label": "github.com/NotHarshhaa/internal-developer-platform-cli",
      "href": "https://github.com/NotHarshhaa/internal-developer-platform-cli"
    },
    "stars": 1,
    "forks": 2,
    "issues": 0,
    "lastUpdated": "2026-04-17T11:33:15Z",
    "lastCommit": "4776fc3ca75747f8bcd088b7297fe09f09a51998"
  },
  {
    "title": "Awesome DevOps Cloud UI",
    "techStack": [
      "TypeScript"
    ],
    "description": "A curated collection of beautiful, powerful, and helpful UI-based tools and resources for DevOps and Cloud professionals.",
    "link": {
      "label": "github.com/NotHarshhaa/awesome-devops-cloud-ui",
      "href": "https://github.com/NotHarshhaa/awesome-devops-cloud-ui"
    },
    "stars": 1,
    "forks": 4,
    "issues": 0,
    "lastUpdated": "2025-09-27T07:19:24Z",
    "lastCommit": "6a653d711d6f4c690d9dce835e84f0c5e29739bb"
  },
  {
    "title": "Shadcn Docs Nuxt Starter",
    "techStack": [
      "JavaScript"
    ],
    "description": "No description provided.",
    "link": {
      "label": "github.com/NotHarshhaa/shadcn-docs-nuxt-starter",
      "href": "https://github.com/NotHarshhaa/shadcn-docs-nuxt-starter"
    },
    "stars": 1,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2025-05-31T16:31:56Z",
    "lastCommit": "f3e015feb8009cd96592bcb345c6097d08c2a7d5"
  },
  {
    "title": "MLOps Project Generator",
    "techStack": [
      "Python",
      "MLOps",
      "Machine Learning",
      "CLI"
    ],
    "description": "A CLI tool that generates production-ready MLOps project templates for Scikit-learn, PyTorch, and TensorFlow.",
    "link": {
      "label": "github.com/NotHarshhaa/mlops-project-generator",
      "href": "https://github.com/NotHarshhaa/mlops-project-generator"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-26T06:08:24Z",
    "lastCommit": "490981c4e53a04476d10c6d0ace1fcaaba15d07b"
  },
  {
    "title": "Terraview Action",
    "techStack": [
      "Go"
    ],
    "description": "GitHub Action for Terraview — post Terraform resource status tables on pull requests, gate pipelines on drift, block pending destroys, or export audit reports.",
    "link": {
      "label": "github.com/NotHarshhaa/terraview-action",
      "href": "https://github.com/NotHarshhaa/terraview-action"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-06-05T04:38:03Z",
    "lastCommit": "024d827fb364c66d2fdecf6f9400a57c7558398d"
  },
  {
    "title": "Mainframe MCP Server",
    "techStack": [
      "Ibm",
      "Ibm Mainframe",
      "Mainframe",
      "Mainframe Mcp"
    ],
    "description": "An enterprise-grade Model Context Protocol (MCP) server for IBM z/OS environments. Bridges MCP-compatible AI agents with mainframe resources jobs, datasets, ...",
    "link": {
      "label": "github.com/NotHarshhaa/mainframe-mcp-server",
      "href": "https://github.com/NotHarshhaa/mainframe-mcp-server"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-06-04T18:02:42Z",
    "lastCommit": "52c381bbf1dae6bb31b174f47ae6abe0ccabc41b"
  },
  {
    "title": "AWS Ghost",
    "techStack": [
      "Aws",
      "Aws Cli",
      "Cli",
      "Cloud Cost"
    ],
    "description": "Scan your AWS account for forgotten, idle, and wasteful resources with per-resource cost estimates. Read-only. No SaaS. Just a CLI.",
    "link": {
      "label": "github.com/NotHarshhaa/aws-ghost",
      "href": "https://github.com/NotHarshhaa/aws-ghost"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-30T16:46:12Z",
    "lastCommit": "90db1d3dd35502cb24016511f84471a709167367"
  },
  {
    "title": "Terraview",
    "techStack": [
      "TypeScript"
    ],
    "description": "A lightweight, self-hostable, git-native web UI you just drop into any Terraform repo that shows a live resource status grid (created / active / inactive / n...",
    "link": {
      "label": "github.com/NotHarshhaa/terraview",
      "href": "https://github.com/NotHarshhaa/terraview"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-29T12:38:24Z",
    "lastCommit": "a08afb05b96cc59e453826bdd687ee11987b4437"
  },
  {
    "title": "Pod Why Dead",
    "techStack": [
      "Cli",
      "Debugging",
      "Devops",
      "Go"
    ],
    "description": "One command that reconstructs the full death story of any Kubernetes pod exit reason, last logs, node pressure, events, and recommendations.",
    "link": {
      "label": "github.com/NotHarshhaa/pod-why-dead",
      "href": "https://github.com/NotHarshhaa/pod-why-dead"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-05-01T10:18:21Z",
    "lastCommit": "d32f88fb95757fa1e26ed984069f60c58df7a5c3"
  },
  {
    "title": "Homebrew Tap",
    "techStack": [
      "Ruby"
    ],
    "description": "No description provided.",
    "link": {
      "label": "github.com/NotHarshhaa/homebrew-tap",
      "href": "https://github.com/NotHarshhaa/homebrew-tap"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-04-20T05:56:24Z",
    "lastCommit": "4ea338acf442a1a525cf65bea02a2599ebaed81d"
  },
  {
    "title": "DevOps AtlasX",
    "techStack": [
      "TypeScript"
    ],
    "description": "DevOps AtlasX is a real-world knowledge platform that helps engineers quickly identify, understand, and fix production issues across modern DevOps tools.",
    "link": {
      "label": "github.com/NotHarshhaa/devops-atlasx",
      "href": "https://github.com/NotHarshhaa/devops-atlasx"
    },
    "stars": 0,
    "forks": 0,
    "issues": 0,
    "lastUpdated": "2026-04-18T16:05:48Z",
    "lastCommit": "d538bd930eb7783d1472e770298e8f2cce2c6038"
  },
  {
    "title": "Cost Digest Bot",
    "techStack": [
      "Python"
    ],
    "description": "A daily Slack bot that pulls your AWS cloud spend, diffs it against last week, and posts a clean human-readable cost summary with anomaly alerts no cloud con...",
    "link": {
      "label": "github.com/NotHarshhaa/cost-digest-bot",
      "href": "https://github.com/NotHarshhaa/cost-digest-bot"
    },
    "stars": 0,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2026-04-03T07:23:25Z",
    "lastCommit": "d7ebacdf434f5b48d83a4a33c1d03eb2e88cc484"
  },
  {
    "title": "Itsmeharshhaa Site",
    "techStack": [
      "CSS"
    ],
    "description": "Personal Web portfolio (WIP)",
    "link": {
      "label": "github.com/NotHarshhaa/itsmeharshhaa.site",
      "href": "https://github.com/NotHarshhaa/itsmeharshhaa.site"
    },
    "stars": 0,
    "forks": 1,
    "issues": 0,
    "lastUpdated": "2025-04-12T04:53:03Z",
    "lastCommit": "30a4c8e06825071d41dfcae2ac6158522768a4c0"
  }
];
