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
    "stars": 14,
    "forks": 20,
    "issues": 0,
    "lastUpdated": "2025-12-21T23:40:39Z",
    "lastCommit": "99274f21bf61a614d8f362d09e9c3f46e3dad2cd"
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
    "stars": 8,
    "forks": 19,
    "issues": 0,
    "lastUpdated": "2025-06-04T10:27:42Z",
    "lastCommit": "76a6209746bbf4c0fa3463bcc89ea9fad47ec9d1"
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
    "stars": 69,
    "forks": 68,
    "issues": 0,
    "lastUpdated": "2025-12-05T12:54:39Z",
    "lastCommit": "85af1d99301781702234e86fabf16213bbdeddf1"
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
    "stars": 112,
    "forks": 97,
    "issues": 1,
    "lastUpdated": "2025-12-05T12:54:45Z",
    "lastCommit": "b20814fcbd69fc0d7e4f0ecd024a012292baf390"
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
    "stars": 200,
    "forks": 161,
    "issues": 2,
    "lastUpdated": "2026-01-19T03:51:01Z",
    "lastCommit": "cd2efbc8b4fb93c9f5d2bc4894f268dd8970883e"
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
    "stars": 153,
    "forks": 112,
    "issues": 0,
    "lastUpdated": "2026-01-19T09:34:21Z",
    "lastCommit": "b52cb1533e5dbe47b963e951d7043e9cbe022aff"
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
    "stars": 55,
    "forks": 52,
    "issues": 0,
    "lastUpdated": "2026-01-21T16:46:23Z",
    "lastCommit": "8a88e6df92d16474eb31a0cccaac0eb9b3b06595"
  },
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
    "stars": 3318,
    "forks": 3432,
    "issues": 15,
    "lastUpdated": "2026-01-21T13:29:31Z",
    "lastCommit": "42cb29d862c46eb2be5ef38b0e25fbe48007eb86"
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
    "stars": 5,
    "forks": 11,
    "issues": 0,
    "lastUpdated": "2025-08-13T23:59:30Z",
    "lastCommit": "d54f10fc513fc2fdd33f92041ae0f9dfaac36c43"
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
    "stars": 323,
    "forks": 236,
    "issues": 1,
    "lastUpdated": "2026-01-09T14:43:53Z",
    "lastCommit": "dee8ff4607954972994dedc5689390ffd8ad01b7"
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
    "stars": 19,
    "forks": 56,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:03:22Z",
    "lastCommit": "bd77ff8270a7ac5c75a126c8a05a4ff2f32e6563"
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
    "stars": 10,
    "forks": 24,
    "issues": 0,
    "lastUpdated": "2025-12-18T19:14:34Z",
    "lastCommit": "e174ff110b003113e4e2dbc8153afdd49df38fab"
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
    "forks": 19,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:04:31Z",
    "lastCommit": "15102a44dc31d8f340e4ae1ca83db337b488c483"
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
    "stars": 14,
    "forks": 66,
    "issues": 0,
    "lastUpdated": "2025-11-17T20:26:18Z",
    "lastCommit": "823466a188d4853ca15308d6194a49d04582b685"
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
    "stars": 20,
    "forks": 39,
    "issues": 0,
    "lastUpdated": "2025-12-25T13:08:35Z",
    "lastCommit": "c79e4344f3531c08ab27ced74bfa2b018d8fe4e0"
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
    "stars": 175,
    "forks": 202,
    "issues": 0,
    "lastUpdated": "2026-01-20T08:50:28Z",
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
    "stars": 175,
    "forks": 194,
    "issues": 0,
    "lastUpdated": "2026-01-15T13:30:42Z",
    "lastCommit": "e45b81866db44b6a9662aa68b49a0ae4e1b93409"
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
    "stars": 60,
    "forks": 63,
    "issues": 0,
    "lastUpdated": "2026-01-20T13:04:53Z",
    "lastCommit": "18d7d06cc018f82eede8f098ec01b86fa6fb489e"
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
    "stars": 411,
    "forks": 193,
    "issues": 3,
    "lastUpdated": "2026-01-21T11:44:36Z",
    "lastCommit": "734c2cf7233dcca42bbb66203b764f4a462e00dd"
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
    "stars": 9,
    "forks": 24,
    "issues": 0,
    "lastUpdated": "2025-04-15T18:10:14Z",
    "lastCommit": "2fec48f59b8ea0a59f03314763fe18fc4fe05fbd"
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
    "stars": 87,
    "forks": 59,
    "issues": 0,
    "lastUpdated": "2026-01-02T18:21:28Z",
    "lastCommit": "c5d20e6f4d6006e8d87d54b0f9e264360e18c4c3"
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
    "stars": 54,
    "forks": 52,
    "issues": 0,
    "lastUpdated": "2025-12-05T12:54:45Z",
    "lastCommit": "360677ff36bf88d19ac92002c0285807e4c604bb"
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
    "stars": 25,
    "forks": 58,
    "issues": 0,
    "lastUpdated": "2025-12-07T07:11:26Z",
    "lastCommit": "3d8824f124e7750499ef07dd1057304e15c90ed0"
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
    "stars": 262,
    "forks": 199,
    "issues": 2,
    "lastUpdated": "2026-01-20T23:22:03Z",
    "lastCommit": "d433174187b1718521bbeb45689a25444fb515b2"
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
    "stars": 656,
    "forks": 512,
    "issues": 2,
    "lastUpdated": "2026-01-20T23:09:44Z",
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
    "stars": 741,
    "forks": 464,
    "issues": 0,
    "lastUpdated": "2026-01-14T12:57:56Z",
    "lastCommit": "1fef40a47764021ca15eb1e227502a6e64787176"
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
    "stars": 22,
    "forks": 26,
    "issues": 1,
    "lastUpdated": "2026-01-15T15:41:08Z",
    "lastCommit": "79fbf1f0128c7b2d4f09f9d31d8eed896219f110"
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
    "forks": 7,
    "issues": 0,
    "lastUpdated": "2025-12-18T10:58:39Z",
    "lastCommit": "b3c5d433b8298ecf28baae97aa5ec030bb95f038"
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
    "stars": 18,
    "forks": 24,
    "issues": 0,
    "lastUpdated": "2026-01-14T11:19:05Z",
    "lastCommit": "b9abb4e7ac0f05a45dfc0cd22fa65ce4dfd2b03b"
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
    "stars": 4,
    "forks": 6,
    "issues": 0,
    "lastUpdated": "2025-11-03T15:18:39Z",
    "lastCommit": "d0a9a3bca984b55babd7750e7159faa4b61d2192"
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
    "stars": 12,
    "forks": 12,
    "issues": 0,
    "lastUpdated": "2026-01-04T13:47:20Z",
    "lastCommit": "127879c0f161a79b02a145e107c052677074e4f5"
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
    "stars": 6,
    "forks": 4,
    "issues": 0,
    "lastUpdated": "2026-01-04T21:30:02Z",
    "lastCommit": "171c0b1a247e38d31261168dbb2eb53676888f1a"
  }
];
