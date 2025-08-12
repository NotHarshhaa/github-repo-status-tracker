#!/bin/bash
# run.sh - Helper script for GitHub Repository Status Tracker

# Set script to exit on error
set -e

# Load environment variables if .env file exists
if [ -f .env ]; then
  echo "Loading environment variables from .env file"
  export $(grep -v '^#' .env | xargs)
fi

# Display help if requested
if [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
  echo "GitHub Repository Status Tracker"
  echo ""
  echo "Usage: ./run.sh [options]"
  echo ""
  echo "Options:"
  echo "  -h, --help        Show this help message"
  echo "  -v, --verbose     Enable verbose output"
  echo "  -f, --force       Force update even if rate limited"
  echo "  -s, --sort TYPE   Sort repositories by: stars, forks, issues, updated"
  echo "  -c, --config FILE Path to config file (default: repos.json)"
  echo "  -r, --readme FILE Path to README file (default: README.md)"
  echo "  -i, --install     Install/update dependencies"
  echo "  -e, --env         Create .env file from .env.example if it doesn't exist"
  echo ""
  exit 0
fi

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
  echo "Error: Python 3 is required but not installed"
  exit 1
fi

# Install dependencies if requested
if [ "$1" == "-i" ] || [ "$1" == "--install" ]; then
  echo "Installing dependencies..."
  python3 -m pip install -r requirements.txt
  echo "Dependencies installed successfully"
  exit 0
fi

# Create .env file from example if requested
if [ "$1" == "-e" ] || [ "$1" == "--env" ]; then
  if [ ! -f .env ] && [ -f .env.example ]; then
    echo "Creating .env file from .env.example"
    cp .env.example .env
    echo "Please edit .env file with your GitHub token"
  elif [ -f .env ]; then
    echo ".env file already exists"
  else
    echo "Error: .env.example file not found"
    exit 1
  fi
  exit 0
fi

# Check for GitHub token
if [ -z "$GH_TOKEN" ]; then
  echo "Warning: GH_TOKEN environment variable not set"
  echo "API requests may be rate limited. Consider setting up a .env file."
fi

# Map command line arguments to python script arguments
PYTHON_ARGS=""

while [ "$#" -gt 0 ]; do
  case "$1" in
    -v|--verbose)
      PYTHON_ARGS="$PYTHON_ARGS -v"
      ;;
    -f|--force)
      PYTHON_ARGS="$PYTHON_ARGS -f"
      ;;
    -s|--sort)
      PYTHON_ARGS="$PYTHON_ARGS -s $2"
      shift
      ;;
    -c|--config)
      PYTHON_ARGS="$PYTHON_ARGS -c $2"
      shift
      ;;
    -r|--readme)
      PYTHON_ARGS="$PYTHON_ARGS -r $2"
      shift
      ;;
    *)
      echo "Unknown option: $1"
      echo "Run './run.sh --help' for usage information"
      exit 1
      ;;
  esac
  shift
done

# Run the script
echo "Starting GitHub Repository Status Tracker..."
python3 update_status.py $PYTHON_ARGS

# Check exit status
if [ $? -eq 0 ]; then
  echo "Repository status update completed successfully"
else
  echo "Repository status update failed"
  exit 1
fi
