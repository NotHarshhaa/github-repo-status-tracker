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
    "stars": 9,
    "forks": 15,
    "issues": 0,
    "lastUpdated": "2025-08-05T04:18:20Z",
    "lastCommit": "6fde1dc60646f5e9023c89ed9d87dc4cb27cddfe"
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
    "forks": 18,
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
    "lastUpdated": "2025-10-05T16:33:10Z",
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
    "stars": 108,
    "forks": 92,
    "issues": 1,
    "lastUpdated": "2025-10-08T06:30:05Z",
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
    "stars": 188,
    "forks": 154,
    "issues": 2,
    "lastUpdated": "2025-10-11T20:22:18Z",
    "lastCommit": "b7499cd11cee856e952cf314ae4f8299ae324704"
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
    "stars": 144,
    "forks": 104,
    "issues": 0,
    "lastUpdated": "2025-10-05T16:32:44Z",
    "lastCommit": "74fa933932f420575960d738e9402c2a15437ce6"
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
    "stars": 54,
    "forks": 50,
    "issues": 0,
    "lastUpdated": "2025-10-05T16:33:18Z",
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
    "stars": 2605,
    "forks": 2788,
    "issues": 14,
    "lastUpdated": "2025-10-11T20:49:12Z",
    "lastCommit": "16b7850fce07a4c7903bbac1fa911680e3c211ea"
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
    "forks": 7,
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
    "stars": 303,
    "forks": 213,
    "issues": 1,
    "lastUpdated": "2025-10-09T13:51:01Z",
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
    "forks": 53,
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
    "stars": 9,
    "forks": 23,
    "issues": 0,
    "lastUpdated": "2025-03-17T05:38:10Z",
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
    "stars": 10,
    "forks": 61,
    "issues": 0,
    "lastUpdated": "2025-08-31T12:11:41Z",
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
    "stars": 18,
    "forks": 35,
    "issues": 0,
    "lastUpdated": "2025-10-09T08:31:58Z",
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
    "stars": 167,
    "forks": 196,
    "issues": 0,
    "lastUpdated": "2025-10-05T16:33:15Z",
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
    "stars": 167,
    "forks": 185,
    "issues": 0,
    "lastUpdated": "2025-10-08T01:24:09Z",
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
    "stars": 54,
    "forks": 60,
    "issues": 0,
    "lastUpdated": "2025-10-05T16:33:25Z",
    "lastCommit": "79610cbee416d001d9cbb467bab7e3fbedb778fa"
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
    "stars": 368,
    "forks": 179,
    "issues": 2,
    "lastUpdated": "2025-10-11T13:19:19Z",
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
    "forks": 23,
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
    "stars": 86,
    "forks": 58,
    "issues": 0,
    "lastUpdated": "2025-10-05T16:33:07Z",
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
    "lastUpdated": "2025-10-11T13:19:40Z",
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
    "forks": 52,
    "issues": 0,
    "lastUpdated": "2025-10-07T16:30:24Z",
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
    "stars": 225,
    "forks": 166,
    "issues": 0,
    "lastUpdated": "2025-10-11T13:19:33Z",
    "lastCommit": "b4c1a7361f9f167685ca6968ebdbae3b3ef5bfd4"
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
    "stars": 460,
    "forks": 364,
    "issues": 2,
    "lastUpdated": "2025-10-11T02:09:52Z",
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
    "stars": 719,
    "forks": 450,
    "issues": 0,
    "lastUpdated": "2025-10-11T13:19:10Z",
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
    "stars": 18,
    "forks": 18,
    "issues": 1,
    "lastUpdated": "2025-10-11T20:22:23Z",
    "lastCommit": "edddb948694b131e4a2a999c7210bd7be47aa87b"
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
    "forks": 6,
    "issues": 0,
    "lastUpdated": "2025-08-11T17:34:51Z",
    "lastCommit": "bac41cba20250ff09532f87727ebd8de2b1b3df5"
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
    "stars": 9,
    "forks": 15,
    "issues": 0,
    "lastUpdated": "2025-08-29T09:16:42Z",
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
    "stars": 3,
    "forks": 3,
    "issues": 0,
    "lastUpdated": "2025-08-03T18:18:00Z",
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
    "stars": 9,
    "forks": 7,
    "issues": 0,
    "lastUpdated": "2025-10-06T09:34:34Z",
    "lastCommit": "c4f660865df886577c592ee75a8f0b28ffe9fa90"
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
    "stars": 1,
    "forks": 2,
    "issues": 0,
    "lastUpdated": "2025-09-25T12:03:03Z",
    "lastCommit": "0c42b10686a7524aafe00dfd3a16c3885f670e70"
  }
];
