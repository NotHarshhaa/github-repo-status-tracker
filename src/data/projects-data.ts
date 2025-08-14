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
    "forks": 12,
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
    "forks": 17,
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
    "stars": 67,
    "forks": 65,
    "issues": 0,
    "lastUpdated": "2025-08-14T13:11:05Z",
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
    "stars": 103,
    "forks": 80,
    "issues": 0,
    "lastUpdated": "2025-08-12T21:10:00Z",
    "lastCommit": "f9f9629b03ee20d09a029f5cd38fa2c7c827a1c7"
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
    "stars": 175,
    "forks": 149,
    "issues": 2,
    "lastUpdated": "2025-08-01T13:54:44Z",
    "lastCommit": "79e74472f441a75fbdb5f994b324b02d519244be"
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
    "stars": 121,
    "forks": 92,
    "issues": 0,
    "lastUpdated": "2025-08-03T01:34:35Z",
    "lastCommit": "7bb781bac8fb9db8c9c17f7ef4ebf7e1d410f9e1"
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
    "stars": 51,
    "forks": 47,
    "issues": 0,
    "lastUpdated": "2025-08-03T01:36:47Z",
    "lastCommit": "e8faec5436936b02b906822395bebc33b5681b3a"
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
    "stars": 2145,
    "forks": 2465,
    "issues": 12,
    "lastUpdated": "2025-08-14T16:15:19Z",
    "lastCommit": "45a84272dc43add0e1c6b9e23969affff88ef0d9"
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
    "forks": 6,
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
    "stars": 283,
    "forks": 195,
    "issues": 1,
    "lastUpdated": "2025-08-14T16:59:48Z",
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
    "forks": 51,
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
    "forks": 20,
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
    "forks": 18,
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
    "forks": 60,
    "issues": 0,
    "lastUpdated": "2025-08-14T15:25:18Z",
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
    "stars": 16,
    "forks": 33,
    "issues": 0,
    "lastUpdated": "2025-04-17T02:18:02Z",
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
    "stars": 162,
    "forks": 189,
    "issues": 0,
    "lastUpdated": "2025-08-12T21:09:56Z",
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
    "stars": 160,
    "forks": 171,
    "issues": 0,
    "lastUpdated": "2025-08-14T16:07:54Z",
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
    "stars": 49,
    "forks": 57,
    "issues": 0,
    "lastUpdated": "2025-08-02T14:48:20Z",
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
    "stars": 352,
    "forks": 171,
    "issues": 2,
    "lastUpdated": "2025-08-10T22:04:02Z",
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
    "forks": 20,
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
    "stars": 77,
    "forks": 54,
    "issues": 0,
    "lastUpdated": "2025-05-06T13:08:25Z",
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
    "stars": 50,
    "forks": 49,
    "issues": 0,
    "lastUpdated": "2025-08-07T05:16:13Z",
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
    "stars": 24,
    "forks": 46,
    "issues": 0,
    "lastUpdated": "2025-04-30T08:38:57Z",
    "lastCommit": "fc3b67f8c40d779988b71b25120f49bf14922842"
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
    "stars": 201,
    "forks": 144,
    "issues": 0,
    "lastUpdated": "2025-08-14T09:08:04Z",
    "lastCommit": "e7aa33d6f8c06e711813863807c255015c8c1368"
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
    "stars": 378,
    "forks": 284,
    "issues": 2,
    "lastUpdated": "2025-08-14T08:58:05Z",
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
    "stars": 703,
    "forks": 437,
    "issues": 0,
    "lastUpdated": "2025-08-08T21:32:50Z",
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
    "stars": 12,
    "forks": 13,
    "issues": 1,
    "lastUpdated": "2025-08-14T09:00:00Z",
    "lastCommit": "339a49e77d7f0dc4678d0528c70f7fc10954106b"
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
    "forks": 3,
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
    "stars": 6,
    "forks": 9,
    "issues": 0,
    "lastUpdated": "2025-07-31T03:26:04Z",
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
    "forks": 2,
    "issues": 0,
    "lastUpdated": "2025-08-03T18:18:00Z",
    "lastCommit": "d0a9a3bca984b55babd7750e7159faa4b61d2192"
  }
];
