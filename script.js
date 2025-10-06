const commandData = [
    
    {
        "command": "az",
        "os": "Linux, macOS, Windows",
        "category": "Cloud",
        "frequency": "High",
        "tooltip": "Azure CLI",
        "usage": "az vm list",
        "description": "Command-line interface for Microsoft Azure."
    },
	{
        "command": "pip install",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "High",
        "tooltip": "Install Python packages",
        "usage": "pip install requests pandas numpy",
        "description": "Installs Python packages from PyPI. Use -r requirements.txt to install from file."
    },
    {
        "command": "pip uninstall",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "Medium",
        "tooltip": "Remove Python packages",
        "usage": "pip uninstall package_name",
        "description": "Uninstalls Python packages from the system."
    },
    {
        "command": "pip freeze",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "High",
        "tooltip": "List installed packages",
        "usage": "pip freeze > requirements.txt",
        "description": "Lists all installed Python packages in requirements format."
    },
    {
        "command": "pip list",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "Medium",
        "tooltip": "Show installed packages",
        "usage": "pip list",
        "description": "Displays all installed Python packages with versions."
    },
    {
        "command": "pip show",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "Medium",
        "tooltip": "Show package information",
        "usage": "pip show package_name",
        "description": "Displays detailed information about a specific package."
    },
    {
        "command": "python -m venv",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "High",
        "tooltip": "Create virtual environment",
        "usage": "python -m venv myenv",
        "description": "Creates a Python virtual environment for isolated package management."
    },
    {
        "command": "npm install",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "High",
        "tooltip": "Install Node.js packages",
        "usage": "npm install express react",
        "description": "Installs Node.js packages and dependencies. Use -g for global installation."
    },
    {
        "command": "npm uninstall",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "Medium",
        "tooltip": "Remove Node.js packages",
        "usage": "npm uninstall package_name",
        "description": "Uninstalls Node.js packages from the project."
    },
    {
        "command": "npm init",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "High",
        "tooltip": "Create package.json",
        "usage": "npm init -y",
        "description": "Creates a package.json file for a new Node.js project."
    },
    {
        "command": "npm run",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "High",
        "tooltip": "Run npm scripts",
        "usage": "npm run dev",
        "description": "Executes scripts defined in package.json file."
    },
    {
        "command": "npm update",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "Medium",
        "tooltip": "Update packages",
        "usage": "npm update",
        "description": "Updates packages to their latest versions based on semantic versioning."
    },
    {
        "command": "npm audit",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "Medium",
        "tooltip": "Security vulnerability audit",
        "usage": "npm audit",
        "description": "Scans project for security vulnerabilities in dependencies."
    },
    {
        "command": "npx",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "High",
        "tooltip": "Execute Node.js packages",
        "usage": "npx create-react-app myapp",
        "description": "Runs Node.js packages without installing them globally."
    },
    {
        "command": "git init",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Initialize Git repository",
        "usage": "git init",
        "description": "Creates a new Git repository in the current directory."
    },
    {
        "command": "git clone",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Clone repository",
        "usage": "git clone https://github.com/user/repo.git",
        "description": "Creates a local copy of a remote repository."
    },
    {
        "command": "git add",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Stage changes",
        "usage": "git add .",
        "description": "Adds file changes to the staging area for the next commit."
    },
    {
        "command": "git commit",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Commit changes",
        "usage": "git commit -m \"Descriptive message\"",
        "description": "Records changes to the repository with a descriptive message."
    },
    {
        "command": "git push",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Push to remote",
        "usage": "git push origin main",
        "description": "Uploads local repository content to a remote repository."
    },
    {
        "command": "git pull",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Pull from remote",
        "usage": "git pull origin main",
        "description": "Fetches and integrates changes from a remote repository."
    },
    {
        "command": "git status",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Show working tree status",
        "usage": "git status",
        "description": "Displays the state of the working directory and staging area."
    },
    {
        "command": "git branch",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "List/create branches",
        "usage": "git branch new-feature",
        "description": "Lists, creates, or deletes branches in the repository."
    },
    {
        "command": "git checkout",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Switch branches",
        "usage": "git checkout develop",
        "description": "Switches to a different branch or restores working tree files."
    },
    {
        "command": "git merge",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Merge branches",
        "usage": "git merge feature-branch",
        "description": "Joins two or more development histories together."
    },
    {
        "command": "git log",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "High",
        "tooltip": "Show commit history",
        "usage": "git log --oneline",
        "description": "Shows the commit history with various formatting options."
    },
    {
        "command": "git diff",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Show changes",
        "usage": "git diff",
        "description": "Shows changes between commits, commit and working tree, etc."
    },
    {
        "command": "git stash",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Stash changes",
        "usage": "git stash pop",
        "description": "Temporarily shelves changes so you can work on something else."
    },
    {
        "command": "git remote",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Manage remote repositories",
        "usage": "git remote -v",
        "description": "Manages the set of remote repositories tracked by your local repo."
    },
    {
        "command": "git fetch",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Download objects from remote",
        "usage": "git fetch origin",
        "description": "Downloads objects and refs from another repository without merging."
    },
    {
        "command": "git reset",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Reset current HEAD",
        "usage": "git reset --hard HEAD~1",
        "description": "Resets current HEAD to the specified state. Use with caution."
    },
    {
        "command": "git revert",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Revert commits",
        "usage": "git revert HEAD",
        "description": "Creates a new commit that undoes the changes from previous commits."
    },
    {
        "command": "docker build",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Build Docker image",
        "usage": "docker build -t myapp:latest .",
        "description": "Builds a Docker image from a Dockerfile in the current directory."
    },
    {
        "command": "docker run",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Run Docker container",
        "usage": "docker run -it ubuntu:latest",
        "description": "Runs a command in a new container from the specified image."
    },
    {
        "command": "docker ps",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "List containers",
        "usage": "docker ps -a",
        "description": "Lists Docker containers. Use -a to show all containers including stopped ones."
    },
    {
        "command": "docker images",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "List images",
        "usage": "docker images",
        "description": "Lists all Docker images available locally."
    },
    {
        "command": "docker stop",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Stop container",
        "usage": "docker stop container_name",
        "description": "Stops one or more running Docker containers."
    },
    {
        "command": "docker rm",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Remove container",
        "usage": "docker rm container_name",
        "description": "Removes one or more Docker containers."
    },
    {
        "command": "docker rmi",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "Medium",
        "tooltip": "Remove image",
        "usage": "docker rmi image_name",
        "description": "Removes one or more Docker images from local storage."
    },
    {
        "command": "docker exec",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Execute command in container",
        "usage": "docker exec -it container_name bash",
        "description": "Runs a command in a running Docker container."
    },
    {
        "command": "docker logs",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Fetch container logs",
        "usage": "docker logs container_name",
        "description": "Fetches the logs of a Docker container."
    },
    {
        "command": "docker-compose up",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Start compose services",
        "usage": "docker-compose up -d",
        "description": "Builds, (re)creates, and starts containers defined in docker-compose.yml."
    },
    {
        "command": "docker-compose down",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "High",
        "tooltip": "Stop compose services",
        "usage": "docker-compose down",
        "description": "Stops and removes containers, networks, and volumes defined in docker-compose.yml."
    },
    {
        "command": "kubectl apply",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "High",
        "tooltip": "Apply configuration",
        "usage": "kubectl apply -f deployment.yaml",
        "description": "Applies a configuration to a resource from a file or stdin."
    },
    {
        "command": "kubectl get",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "High",
        "tooltip": "List resources",
        "usage": "kubectl get pods",
        "description": "Displays one or many resources from the Kubernetes cluster."
    },
    {
        "command": "kubectl describe",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "High",
        "tooltip": "Show resource details",
        "usage": "kubectl describe pod mypod",
        "description": "Shows detailed information about a specific resource or group of resources."
    },
    {
        "command": "kubectl delete",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "High",
        "tooltip": "Delete resources",
        "usage": "kubectl delete pod mypod",
        "description": "Deletes resources from the Kubernetes cluster."
    },
    {
        "command": "kubectl logs",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "High",
        "tooltip": "Print container logs",
        "usage": "kubectl logs mypod",
        "description": "Prints the logs from a container in a pod."
    },
    {
        "command": "kubectl exec",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "High",
        "tooltip": "Execute command in pod",
        "usage": "kubectl exec -it mypod -- bash",
        "description": "Executes a command in a container within a pod."
    },
    {
        "command": "python -c",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "Medium",
        "tooltip": "Execute Python code",
        "usage": "python -c \"print('Hello World')\"",
        "description": "Executes a Python command or script passed as a string."
    },
    {
        "command": "python -m http.server",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "Medium",
        "tooltip": "Start simple HTTP server",
        "usage": "python -m http.server 8000",
        "description": "Starts a simple HTTP server for serving files from the current directory."
    },
    {
        "command": "python -m pytest",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "High",
        "tooltip": "Run pytest",
        "usage": "python -m pytest tests/",
        "description": "Runs tests using the pytest testing framework."
    },
    {
        "command": "node -v",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "Medium",
        "tooltip": "Check Node.js version",
        "usage": "node -v",
        "description": "Displays the installed version of Node.js."
    },
    {
        "command": "npm -v",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "Medium",
        "tooltip": "Check npm version",
        "usage": "npm -v",
        "description": "Displays the installed version of npm."
    },
    {
        "command": "git --version",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Low",
        "tooltip": "Check Git version",
        "usage": "git --version",
        "description": "Displays the installed version of Git."
    },
    {
        "command": "docker --version",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "Low",
        "tooltip": "Check Docker version",
        "usage": "docker --version",
        "description": "Displays the installed version of Docker."
    },
    {
        "command": "kubectl version",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "Low",
        "tooltip": "Check kubectl version",
        "usage": "kubectl version",
        "description": "Displays the installed version of kubectl and cluster information."
    },
    {
        "command": "pip install --upgrade pip",
        "os": "Linux, macOS, Windows",
        "category": "Python",
        "frequency": "Low",
        "tooltip": "Upgrade pip",
        "usage": "pip install --upgrade pip",
        "description": "Upgrades pip to the latest version."
    },
    {
        "command": "npm cache clean",
        "os": "Linux, macOS, Windows",
        "category": "Node.js",
        "frequency": "Low",
        "tooltip": "Clear npm cache",
        "usage": "npm cache clean --force",
        "description": "Clears the npm cache to resolve installation issues."
    },
    {
        "command": "git config",
        "os": "Linux, macOS, Windows",
        "category": "Git",
        "frequency": "Medium",
        "tooltip": "Configure Git settings",
        "usage": "git config --global user.name \"Your Name\"",
        "description": "Gets and sets repository or global options for Git."
    },
    {
        "command": "docker system prune",
        "os": "Linux, macOS, Windows",
        "category": "Docker",
        "frequency": "Low",
        "tooltip": "Clean up Docker system",
        "usage": "docker system prune -a",
        "description": "Removes unused Docker data (containers, images, networks, build cache)."
    },
    {
        "command": "kubectl config",
        "os": "Linux, macOS, Windows",
        "category": "Kubernetes",
        "frequency": "Medium",
        "tooltip": "Manage kubeconfig files",
        "usage": "kubectl config get-contexts",
        "description": "Modifies kubeconfig files for managing Kubernetes cluster access."
    },
    {
        "command": "ls",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "High",
        "tooltip": "List directory contents",
        "usage": "ls -lha",
        "description": "Lists the files and directories in the current working directory. Use -l for long format, -a for hidden files."
    },
    {
        "command": "cd",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "High",
        "tooltip": "Change directory",
        "usage": "cd /var/log",
        "description": "Changes the current working directory to the specified path."
    },
    {
        "command": "mkdir",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "Medium",
        "tooltip": "Make directory",
        "usage": "mkdir new_project_folder",
        "description": "Creates a new directory (folder) with the given name."
    },
    {
        "command": "rm",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Remove files or directories",
        "usage": "rm -rf important_dir/",
        "description": "Removes files or directories. CAUTION: Use -rf (recursive force) with extreme care!"
    },
    {
        "command": "grep",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "High",
        "tooltip": "Search text using patterns",
        "usage": "cat logfile.txt | grep \"ERROR\"",
        "description": "Searches for lines matching a given pattern in a file or piped input."
    },
    {
        "command": "ssh",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Secure Shell connection",
        "usage": "ssh user@server_ip",
        "description": "Connects securely to a remote server."
    },
    {
        "command": "dir",
        "os": "Windows",
        "category": "File Navigation",
        "frequency": "High",
        "tooltip": "List directory contents (Windows equivalent of ls)",
        "usage": "dir /s",
        "description": "Lists files and subdirectories in the current directory. Similar to ls."
    },
    {
        "command": "cls",
        "os": "Windows",
        "category": "System",
        "frequency": "High",
        "tooltip": "Clear screen (Windows equivalent of clear)",
        "usage": "cls",
        "description": "Clears the command prompt window contents."
    },
    {
        "command": "ping",
        "os": "Windows, Linux, macOS",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Test network connectivity",
        "usage": "ping google.com",
        "description": "Sends ICMP echo requests to a host to test reachability."
    },
    {
        "command": "ipconfig",
        "os": "Windows",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Display network configuration",
        "usage": "ipconfig /all",
        "description": "Shows detailed network adapter configuration for Windows."
    },
    {
        "command": "Get-ChildItem",
        "os": "Windows (PowerShell)",
        "category": "File Navigation",
        "frequency": "Medium",
        "tooltip": "PowerShell equivalent of ls/dir",
        "usage": "Get-ChildItem -Path C:\\Users",
        "description": "Retrieves the items (files/folders) in one or more specified locations."
    },
    {
        "command": "clear",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "High",
        "tooltip": "Clear the terminal screen",
        "usage": "clear",
        "description": "Clears all previous output from the terminal window."
    },
    {
        "command": "history",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "View previously executed commands",
        "usage": "history | grep \"ssh\"",
        "description": "Displays a numbered list of the commands you have recently run."
    },
    {
        "command": "cp",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Copy files and directories",
        "usage": "cp file1.txt file2.txt",
        "description": "Copies files or directories from source to destination."
    },
    {
        "command": "mv",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Move or rename files",
        "usage": "mv oldname.txt newname.txt",
        "description": "Moves or renames files and directories."
    },
    {
        "command": "cat",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "High",
        "tooltip": "Concatenate and display file content",
        "usage": "cat filename.txt",
        "description": "Displays the contents of a file. Also used to combine files."
    },
    {
        "command": "chmod",
        "os": "Linux, macOS",
        "category": "Permissions",
        "frequency": "Medium",
        "tooltip": "Change file permissions",
        "usage": "chmod 755 script.sh",
        "description": "Changes the permissions of a file or directory."
    },
    {
        "command": "chown",
        "os": "Linux, macOS",
        "category": "Permissions",
        "frequency": "Medium",
        "tooltip": "Change file owner",
        "usage": "chown user:group file.txt",
        "description": "Changes the owner and group of a file or directory."
    },
    {
        "command": "ps",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "High",
        "tooltip": "Display running processes",
        "usage": "ps aux",
        "description": "Shows information about active processes."
    },
    {
        "command": "kill",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Terminate processes",
        "usage": "kill -9 1234",
        "description": "Sends signals to processes, typically to terminate them."
    },
    {
        "command": "top",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Display system processes",
        "usage": "top",
        "description": "Shows real-time system information and running processes."
    },
    {
        "command": "find",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "Medium",
        "tooltip": "Search for files",
        "usage": "find /home -name \"*.txt\"",
        "description": "Searches for files and directories based on various criteria."
    },
    {
        "command": "tar",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "Medium",
        "tooltip": "Archive files",
        "usage": "tar -czvf archive.tar.gz folder/",
        "description": "Creates and extracts archive files."
    },
    {
        "command": "curl",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Transfer data from URLs",
        "usage": "curl -O https://example.com/file.zip",
        "description": "Transfers data to or from a server using various protocols."
    },
    {
        "command": "wget",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Download files from web",
        "usage": "wget https://example.com/file.iso",
        "description": "Downloads files from the internet."
    },
    {
        "command": "scp",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Secure copy between hosts",
        "usage": "scp file.txt user@remote:/path/",
        "description": "Copies files between hosts securely over SSH."
    },
    {
        "command": "df",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Display disk space usage",
        "usage": "df -h",
        "description": "Shows disk space usage for file systems."
    },
    {
        "command": "du",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Estimate file space usage",
        "usage": "du -sh folder/",
        "description": "Shows disk usage of files and directories."
    },
    {
        "command": "man",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Display manual pages",
        "usage": "man ls",
        "description": "Displays the manual (documentation) for commands."
    },
    {
        "command": "echo",
        "os": "Linux, macOS, Windows",
        "category": "Text & Content",
        "frequency": "High",
        "tooltip": "Display text",
        "usage": "echo \"Hello World\"",
        "description": "Displays a line of text or variables to the terminal."
    },
    {
        "command": "touch",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "Medium",
        "tooltip": "Create empty file",
        "usage": "touch newfile.txt",
        "description": "Creates an empty file or updates the timestamp of an existing file."
    },
    {
        "command": "ln",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "Low",
        "tooltip": "Create links between files",
        "usage": "ln -s target linkname",
        "description": "Creates hard or symbolic links between files."
    },
    {
        "command": "diff",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Compare files line by line",
        "usage": "diff file1.txt file2.txt",
        "description": "Compares two files and shows the differences."
    },
    {
        "command": "head",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Output first part of files",
        "usage": "head -n 20 file.txt",
        "description": "Displays the first lines of a file."
    },
    {
        "command": "tail",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "High",
        "tooltip": "Output last part of files",
        "usage": "tail -f logfile.log",
        "description": "Displays the last lines of a file. Use -f to follow changes."
    },
    {
        "command": "less",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "High",
        "tooltip": "View file content page by page",
        "usage": "less largefile.txt",
        "description": "Displays file contents one screen at a time with navigation."
    },
    {
        "command": "which",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Locate a command",
        "usage": "which python",
        "description": "Shows the full path of shell commands."
    },
    {
        "command": "alias",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Create command shortcuts",
        "usage": "alias ll='ls -la'",
        "description": "Creates shortcuts for longer commands."
    },
    {
        "command": "uname",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Print system information",
        "usage": "uname -a",
        "description": "Displays system information like kernel version and hardware."
    },
    {
        "command": "whoami",
        "os": "Linux, macOS, Windows",
        "category": "Utility",
        "frequency": "Low",
        "tooltip": "Print current user",
        "usage": "whoami",
        "description": "Displays the username of the current user."
    },
    {
        "command": "pwd",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "High",
        "tooltip": "Print working directory",
        "usage": "pwd",
        "description": "Displays the current working directory path."
    },
    {
        "command": "sort",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Sort lines of text",
        "usage": "sort filename.txt",
        "description": "Sorts lines of text files in alphabetical or numerical order."
    },
    {
        "command": "uniq",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Report or omit repeated lines",
        "usage": "sort file.txt | uniq",
        "description": "Filters out duplicate adjacent lines from sorted input."
    },
    {
        "command": "wc",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Word count",
        "usage": "wc -l file.txt",
        "description": "Counts lines, words, and characters in files."
    },
    {
        "command": "cut",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Remove sections from lines",
        "usage": "cut -d',' -f1 file.csv",
        "description": "Cuts out selected portions of each line of a file."
    },
    {
        "command": "sed",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Stream editor for filtering text",
        "usage": "sed 's/old/new/g' file.txt",
        "description": "Performs text transformations on an input stream."
    },
    {
        "command": "awk",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Pattern scanning and processing",
        "usage": "awk '{print $1}' file.txt",
        "description": "A programming language for text processing and data extraction."
    },
    {
        "command": "xargs",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Build and execute commands",
        "usage": "find . -name \"*.txt\" | xargs rm",
        "description": "Builds and executes command lines from standard input."
    },
    {
        "command": "nano",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Simple text editor",
        "usage": "nano file.txt",
        "description": "A simple, user-friendly command-line text editor."
    },
    {
        "command": "vim",
        "os": "Linux, macOS",
        "category": "Text & Content",
        "frequency": "Medium",
        "tooltip": "Advanced text editor",
        "usage": "vim file.txt",
        "description": "A powerful, modal text editor with extensive features."
    },
    {
        "command": "git",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Version control system",
        "usage": "git commit -m \"message\"",
        "description": "Distributed version control system for tracking code changes."
    },
    {
        "command": "docker",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Container platform",
        "usage": "docker ps -a",
        "description": "Platform for developing, shipping, and running applications in containers."
    },
    {
        "command": "kubectl",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "Medium",
        "tooltip": "Kubernetes cluster management",
        "usage": "kubectl get pods",
        "description": "Command-line tool for controlling Kubernetes clusters."
    },
    {
        "command": "sudo",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "High",
        "tooltip": "Execute command as superuser",
        "usage": "sudo apt update",
        "description": "Executes a command with superuser privileges. Essential for system administration tasks."
    },
    {
        "command": "apt",
        "os": "Linux (Debian/Ubuntu)",
        "category": "Package Management",
        "frequency": "High",
        "tooltip": "Package management for Debian",
        "usage": "apt install package_name",
        "description": "Advanced Package Tool for installing, updating, and removing software on Debian-based systems."
    },
    {
        "command": "yum",
        "os": "Linux (RHEL/CentOS)",
        "category": "Package Management",
        "frequency": "High",
        "tooltip": "Package manager for Red Hat systems",
        "usage": "yum install package_name",
        "description": "Yellowdog Updater Modified for managing packages on Red Hat-based systems."
    },
    {
        "command": "dnf",
        "os": "Linux (Fedora/RHEL)",
        "category": "Package Management",
        "frequency": "High",
        "tooltip": "Next-generation package manager",
        "usage": "dnf install package_name",
        "description": "Dandified YUM, the modern package manager for Fedora and newer Red Hat systems."
    },
    {
        "command": "pacman",
        "os": "Linux (Arch)",
        "category": "Package Management",
        "frequency": "High",
        "tooltip": "Package manager for Arch Linux",
        "usage": "pacman -S package_name",
        "description": "Package manager for Arch Linux and its derivatives."
    },
    {
        "command": "brew",
        "os": "macOS, Linux",
        "category": "Package Management",
        "frequency": "High",
        "tooltip": "Package manager for macOS",
        "usage": "brew install package_name",
        "description": "Homebrew package manager for installing software on macOS and Linux."
    },
    {
        "command": "systemctl",
        "os": "Linux",
        "category": "System",
        "frequency": "High",
        "tooltip": "Control systemd services",
        "usage": "systemctl start service_name",
        "description": "Controls systemd system and service manager for starting, stopping, and managing services."
    },
    {
        "command": "journalctl",
        "os": "Linux",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "View systemd logs",
        "usage": "journalctl -u service_name",
        "description": "Queries and displays logs from systemd journal."
    },
    {
        "command": "crontab",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Schedule periodic tasks",
        "usage": "crontab -e",
        "description": "Manages cron jobs for scheduling tasks to run at specific times."
    },
    {
        "command": "at",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Schedule one-time tasks",
        "usage": "echo 'command' | at 14:30",
        "description": "Schedules commands to be executed once at a specific time."
    },
    {
        "command": "useradd",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Create new user account",
        "usage": "useradd newuser",
        "description": "Creates a new user account on the system."
    },
    {
        "command": "usermod",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Modify user account",
        "usage": "usermod -aG groupname username",
        "description": "Modifies an existing user account properties."
    },
    {
        "command": "passwd",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Change user password",
        "usage": "passwd username",
        "description": "Changes user password for the current or specified user."
    },
    {
        "command": "groupadd",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Create new group",
        "usage": "groupadd newgroup",
        "description": "Creates a new group on the system."
    },
    {
        "command": "su",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Switch user",
        "usage": "su - username",
        "description": "Switches to another user account. Without username, switches to root."
    },
    {
        "command": "who",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Show who is logged in",
        "usage": "who",
        "description": "Displays information about users currently logged into the system."
    },
    {
        "command": "w",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Show logged in users and their processes",
        "usage": "w",
        "description": "Shows who is logged in and what they are doing."
    },
    {
        "command": "last",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Show last logged in users",
        "usage": "last",
        "description": "Shows listing of last logged in users."
    },
    {
        "command": "uptime",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Show system uptime",
        "usage": "uptime",
        "description": "Shows how long the system has been running along with load average."
    },
    {
        "command": "free",
        "os": "Linux",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Display memory usage",
        "usage": "free -h",
        "description": "Displays the amount of free and used memory in the system."
    },
    {
        "command": "vmstat",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Report virtual memory statistics",
        "usage": "vmstat 1",
        "description": "Reports information about processes, memory, paging, block IO, traps, and cpu activity."
    },
    {
        "command": "iostat",
        "os": "Linux",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Report CPU and I/O statistics",
        "usage": "iostat -x 1",
        "description": "Monitors system input/output device loading."
    },
    {
        "command": "mpstat",
        "os": "Linux",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Report processor statistics",
        "usage": "mpstat 1",
        "description": "Reports individual processor or processor core statistics."
    },
    {
        "command": "lscpu",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Display CPU architecture information",
        "usage": "lscpu",
        "description": "Displays information about the CPU architecture."
    },
    {
        "command": "lsblk",
        "os": "Linux",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "List block devices",
        "usage": "lsblk",
        "description": "Lists information about all available block devices."
    },
    {
        "command": "mount",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Mount a filesystem",
        "usage": "mount /dev/sdb1 /mnt",
        "description": "Mounts a filesystem on a specified directory."
    },
    {
        "command": "umount",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Unmount a filesystem",
        "usage": "umount /mnt",
        "description": "Unmounts a previously mounted filesystem."
    },
    {
        "command": "fdisk",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Partition table manipulator",
        "usage": "fdisk -l",
        "description": "Manipulates disk partition table. Use with caution."
    },
    {
        "command": "mkfs",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Build a filesystem",
        "usage": "mkfs.ext4 /dev/sdb1",
        "description": "Creates a filesystem on a device or partition."
    },
    {
        "command": "fsck",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Check and repair filesystem",
        "usage": "fsck /dev/sda1",
        "description": "Checks and repairs a Linux filesystem."
    },
    {
        "command": "badblocks",
        "os": "Linux",
        "category": "System",
        "frequency": "Low",
        "tooltip": "Search for bad blocks",
        "usage": "badblocks -v /dev/sda",
        "description": "Searches a device for bad blocks."
    },
    {
        "command": "lsof",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "List open files",
        "usage": "lsof -i :8080",
        "description": "Lists information about files opened by processes."
    },
    {
        "command": "strace",
        "os": "Linux",
        "category": "Development",
        "frequency": "Medium",
        "tooltip": "Trace system calls",
        "usage": "strace command",
        "description": "Traces system calls and signals of a program."
    },
    {
        "command": "ltrace",
        "os": "Linux",
        "category": "Development",
        "frequency": "Medium",
        "tooltip": "Trace library calls",
        "usage": "ltrace command",
        "description": "Traces library calls of a program."
    },
    {
        "command": "time",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Time command execution",
        "usage": "time ls -l",
        "description": "Measures the time taken by a command to execute."
    },
    {
        "command": "timeout",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Run command with time limit",
        "usage": "timeout 10s command",
        "description": "Runs a command with a time limit, killing it if it runs too long."
    },
    {
        "command": "watch",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Execute periodically",
        "usage": "watch -n 1 'ls -l'",
        "description": "Executes a command repeatedly, displaying output fullscreen."
    },
    {
        "command": "tee",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Redirect to file and stdout",
        "usage": "echo 'text' | tee file.txt",
        "description": "Reads from standard input and writes to both standard output and files."
    },
    {
        "command": "script",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Low",
        "tooltip": "Record terminal session",
        "usage": "script session.log",
        "description": "Makes a typescript of everything displayed on the terminal during a session."
    },
    {
        "command": "tmux",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "High",
        "tooltip": "Terminal multiplexer",
        "usage": "tmux new-session -s mysession",
        "description": "Terminal multiplexer that allows multiple terminal sessions in one window."
    },
    {
        "command": "screen",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Screen manager with VT100/ANSI terminal emulation",
        "usage": "screen -S session_name",
        "description": "Full-screen window manager that multiplexes a physical terminal between several processes."
    },
    {
        "command": "bg",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Run job in background",
        "usage": "bg %1",
        "description": "Resumes a suspended job in the background."
    },
    {
        "command": "fg",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Run job in foreground",
        "usage": "fg %1",
        "description": "Brings a background job to the foreground."
    },
    {
        "command": "jobs",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "List background jobs",
        "usage": "jobs",
        "description": "Lists the jobs currently running or stopped in the background."
    },
    {
        "command": "nohup",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Run immune to hangups",
        "usage": "nohup long_running_command &",
        "description": "Runs a command immune to hangups, with output to nohup.out."
    },
    {
        "command": "disown",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Low",
        "tooltip": "Remove job from shell job table",
        "usage": "disown %1",
        "description": "Removes jobs from the shell's job table so they won't receive SIGHUP."
    },
    {
        "command": "pkill",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Kill process by name",
        "usage": "pkill process_name",
        "description": "Sends signals to processes based on their name."
    },
    {
        "command": "pgrep",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Medium",
        "tooltip": "Find process by name",
        "usage": "pgrep process_name",
        "description": "Looks through the currently running processes and lists the process IDs."
    },
    {
        "command": "nice",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Low",
        "tooltip": "Run with modified scheduling priority",
        "usage": "nice -n 10 command",
        "description": "Runs a command with modified scheduling priority (niceness)."
    },
    {
        "command": "renice",
        "os": "Linux, macOS",
        "category": "Process Management",
        "frequency": "Low",
        "tooltip": "Alter priority of running process",
        "usage": "renice -n 10 -p 1234",
        "description": "Alters the scheduling priority of a running process."
    },
    {
        "command": "ip",
        "os": "Linux",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Show / manipulate routing, devices, policy routing and tunnels",
        "usage": "ip addr show",
        "description": "Modern replacement for ifconfig, used for network interface configuration."
    },
    {
        "command": "ifconfig",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Configure network interface parameters",
        "usage": "ifconfig eth0",
        "description": "Configures network interface parameters (deprecated on Linux, use ip instead)."
    },
    {
        "command": "netstat",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Print network connections, routing tables, interface statistics",
        "usage": "netstat -tulpn",
        "description": "Displays network connections, routing tables, interface statistics, etc."
    },
    {
        "command": "ss",
        "os": "Linux",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Another utility to investigate sockets",
        "usage": "ss -tulpn",
        "description": "Utility to investigate sockets, modern replacement for netstat."
    },
    {
        "command": "route",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Show / manipulate IP routing table",
        "usage": "route -n",
        "description": "Shows and manipulates the IP routing table."
    },
    {
        "command": "traceroute",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Print the route packets take to network host",
        "usage": "traceroute google.com",
        "description": "Traces the route that packets take to reach a network host."
    },
    {
        "command": "mtr",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Network diagnostic tool",
        "usage": "mtr google.com",
        "description": "Combines the functionality of traceroute and ping in one tool."
    },
    {
        "command": "nslookup",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Query Internet name servers",
        "usage": "nslookup domain.com",
        "description": "Queries Internet domain name servers for DNS records."
    },
    {
        "command": "dig",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "DNS lookup utility",
        "usage": "dig domain.com",
        "description": "DNS lookup utility that provides more detailed information than nslookup."
    },
    {
        "command": "host",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "DNS lookup utility",
        "usage": "host domain.com",
        "description": "Simple utility for performing DNS lookups."
    },
    {
        "command": "whois",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Client for the whois directory service",
        "usage": "whois domain.com",
        "description": "Queries the whois database for domain registration information."
    },
    {
        "command": "nc",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Arbitrary TCP and UDP connections and listens",
        "usage": "nc -l 8080",
        "description": "Netcat - networking utility for reading from and writing to network connections."
    },
    {
        "command": "telnet",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "Low",
        "tooltip": "User interface to TELNET protocol",
        "usage": "telnet host port",
        "description": "Uses TELNET protocol to communicate with another host (insecure)."
    },
    {
        "command": "ftp",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "Low",
        "tooltip": "File transfer protocol client",
        "usage": "ftp host",
        "description": "File Transfer Protocol client for transferring files (insecure)."
    },
    {
        "command": "sftp",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Secure file transfer program",
        "usage": "sftp user@host",
        "description": "Secure File Transfer Program, encrypted version of FTP over SSH."
    },
    {
        "command": "rsync",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Remote file sync",
        "usage": "rsync -av source/ destination/",
        "description": "Fast and versatile file copying tool for remote and local synchronization."
    },
    {
        "command": "scp",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Secure copy",
        "usage": "scp file.txt user@remote:/path/",
        "description": "Securely copies files between hosts over SSH."
    },
    {
        "command": "dd",
        "os": "Linux, macOS",
        "category": "System",
        "frequency": "Medium",
        "tooltip": "Convert and copy a file",
        "usage": "dd if=/dev/sda of=backup.img bs=4M",
        "description": "Low-level file copy and conversion tool. Use with extreme caution."
    },
    {
        "command": "gzip",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Compress files",
        "usage": "gzip filename",
        "description": "Compresses files using Lempel-Ziv coding (LZ77)."
    },
    {
        "command": "gunzip",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Decompress files",
        "usage": "gunzip filename.gz",
        "description": "Decompresses files compressed by gzip."
    },
    {
        "command": "zip",
        "os": "Linux, macOS, Windows",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Package and compress files",
        "usage": "zip archive.zip file1 file2",
        "description": "Creates compressed archive files in ZIP format."
    },
    {
        "command": "unzip",
        "os": "Linux, macOS, Windows",
        "category": "File Management",
        "frequency": "High",
        "tooltip": "Extract files from ZIP archive",
        "usage": "unzip archive.zip",
        "description": "Extracts files from ZIP archives."
    },
    {
        "command": "bzip2",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "Medium",
        "tooltip": "Block-sorting file compressor",
        "usage": "bzip2 filename",
        "description": "Compresses files using the Burrows-Wheeler block sorting text compression algorithm."
    },
    {
        "command": "xz",
        "os": "Linux, macOS",
        "category": "File Management",
        "frequency": "Medium",
        "tooltip": "Compress or decompress .xz files",
        "usage": "xz filename",
        "description": "Compresses or decompresses files to .xz format."
    },
    {
        "command": "7z",
        "os": "Linux, macOS, Windows",
        "category": "File Management",
        "frequency": "Medium",
        "tooltip": "File archiver with high compression ratio",
        "usage": "7z a archive.7z files/",
        "description": "Creates and extracts 7-Zip archives with high compression ratios."
    },
    {
        "command": "locate",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "Medium",
        "tooltip": "Find files by name",
        "usage": "locate filename",
        "description": "Finds files by name using a pre-built database (faster than find but may be outdated)."
    },
    {
        "command": "updatedb",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "Low",
        "tooltip": "Update locate database",
        "usage": "sudo updatedb",
        "description": "Updates the database used by the locate command."
    },
    {
        "command": "whereis",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Locate binary, source, and manual page files",
        "usage": "whereis python",
        "description": "Locates the binary, source, and manual page files for a command."
    },
    {
        "command": "file",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Determine file type",
        "usage": "file filename",
        "description": "Determines the file type of a given file."
    },
    {
        "command": "stat",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Display file status",
        "usage": "stat filename",
        "description": "Displays detailed information about a file or file system."
    },
    {
        "command": "tree",
        "os": "Linux, macOS",
        "category": "File Navigation",
        "frequency": "Medium",
        "tooltip": "List contents of directories in tree-like format",
        "usage": "tree /path",
        "description": "Lists directory contents in a tree-like format."
    },
    {
        "command": "basename",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Strip directory and suffix from filenames",
        "usage": "basename /path/to/file.txt",
        "description": "Strips directory path and optional suffix from filenames."
    },
    {
        "command": "dirname",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Strip last component from file name",
        "usage": "dirname /path/to/file.txt",
        "description": "Outputs the directory part of a pathname."
    },
    {
        "command": "realpath",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Print resolved path",
        "usage": "realpath symlink",
        "description": "Prints the resolved absolute path for a file, resolving symlinks."
    },
    {
        "command": "readlink",
        "os": "Linux, macOS",
        "category": "Utility",
        "frequency": "Medium",
        "tooltip": "Print resolved symlinks",
        "usage": "readlink symlink",
        "description": "Prints the value of a symbolic link or canonical file name."
    },
    {
        "command": "md5sum",
        "os": "Linux, macOS",
        "category": "Security",
        "frequency": "Medium",
        "tooltip": "Compute MD5 checksum",
        "usage": "md5sum file.iso",
        "description": "Computes and checks MD5 message digest for file integrity verification."
    },
    {
        "command": "sha256sum",
        "os": "Linux, macOS",
        "category": "Security",
        "frequency": "Medium",
        "tooltip": "Compute SHA256 checksum",
        "usage": "sha256sum file.iso",
        "description": "Computes and checks SHA256 cryptographic hash for file integrity."
    },
    {
        "command": "gpg",
        "os": "Linux, macOS",
        "category": "Security",
        "frequency": "Medium",
        "tooltip": "OpenPGP encryption and signing tool",
        "usage": "gpg --encrypt file.txt",
        "description": "GNU Privacy Guard for encrypting and signing data and communications."
    },
    {
        "command": "openssl",
        "os": "Linux, macOS, Windows",
        "category": "Security",
        "frequency": "Medium",
        "tooltip": "OpenSSL command line tool",
        "usage": "openssl genrsa -out key.pem 2048",
        "description": "Toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols."
    },
    {
        "command": "ufw",
        "os": "Linux",
        "category": "Security",
        "frequency": "Medium",
        "tooltip": "Uncomplicated firewall",
        "usage": "ufw allow 22/tcp",
        "description": "User-friendly frontend for managing netfilter firewall rules."
    },
    {
        "command": "iptables",
        "os": "Linux",
        "category": "Security",
        "frequency": "Medium",
        "tooltip": "Administration tool for IPv4 packet filtering",
        "usage": "iptables -L",
        "description": "Administers the IPv4 packet filtering rules in the Linux kernel."
    },
    {
        "command": "fail2ban-client",
        "os": "Linux",
        "category": "Security",
        "frequency": "Low",
        "tooltip": "Fail2ban client",
        "usage": "fail2ban-client status",
        "description": "Client for Fail2ban intrusion prevention software."
    },
    {
        "command": "lynx",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Low",
        "tooltip": "Text web browser",
        "usage": "lynx https://example.com",
        "description": "Text-based web browser for terminal environments."
    },
    {
        "command": "w3m",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Low",
        "tooltip": "Text web browser",
        "usage": "w3m https://example.com",
        "description": "Another text-based web browser with different features."
    },
    {
        "command": "curl",
        "os": "Linux, macOS, Windows",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Transfer data from URLs",
        "usage": "curl -O https://example.com/file.zip",
        "description": "Transfers data to or from a server using various protocols."
    },
    {
        "command": "wget",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "High",
        "tooltip": "Non-interactive network downloader",
        "usage": "wget https://example.com/file.iso",
        "description": "Retrieves files from the web using HTTP, HTTPS, and FTP."
    },
    {
        "command": "aria2c",
        "os": "Linux, macOS",
        "category": "Networking",
        "frequency": "Medium",
        "tooltip": "Lightweight download utility",
        "usage": "aria2c https://example.com/file.iso",
        "description": "Lightweight multi-protocol and multi-source command-line download utility."
    },
    {
        "command": "git",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Distributed version control system",
        "usage": "git commit -m 'message'",
        "description": "Distributed version control system for tracking changes in source code."
    },
    {
        "command": "svn",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "Low",
        "tooltip": "Subversion version control system",
        "usage": "svn checkout url",
        "description": "Centralized version control system, predecessor to Git."
    },
    {
        "command": "make",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Build automation tool",
        "usage": "make",
        "description": "Build automation tool that automatically builds executable programs from source code."
    },
    {
        "command": "gcc",
        "os": "Linux, macOS",
        "category": "Development",
        "frequency": "High",
        "tooltip": "GNU Compiler Collection",
        "usage": "gcc -o program source.c",
        "description": "Compiler system for various programming languages, primarily C and C++."
    },
    {
        "command": "g++",
        "os": "Linux, macOS",
        "category": "Development",
        "frequency": "High",
        "tooltip": "GNU C++ compiler",
        "usage": "g++ -o program source.cpp",
        "description": "C++ compiler from the GNU Compiler Collection."
    },
    {
        "command": "python",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Python interpreter",
        "usage": "python script.py",
        "description": "Interpreter for the Python programming language."
    },
    {
        "command": "node",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Node.js JavaScript runtime",
        "usage": "node app.js",
        "description": "JavaScript runtime built on Chrome's V8 JavaScript engine."
    },
    {
        "command": "npm",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Node package manager",
        "usage": "npm install package",
        "description": "Package manager for JavaScript and the world's largest software registry."
    },
    {
        "command": "docker",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Container platform",
        "usage": "docker run -it ubuntu",
        "description": "Platform for developing, shipping, and running applications in containers."
    },
    {
        "command": "docker-compose",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Define and run multi-container Docker applications",
        "usage": "docker-compose up",
        "description": "Tool for defining and running multi-container Docker applications."
    },
    {
        "command": "kubectl",
        "os": "Linux, macOS, Windows",
        "category": "Development",
        "frequency": "High",
        "tooltip": "Kubernetes command-line tool",
        "usage": "kubectl get pods",
        "description": "Command-line interface for running commands against Kubernetes clusters."
    },
    {
        "command": "aws",
        "os": "Linux, macOS, Windows",
        "category": "Cloud",
        "frequency": "High",
        "tooltip": "Amazon Web Services CLI",
        "usage": "aws s3 ls",
        "description": "Unified command line interface for Amazon Web Services."
    },
    {
        "command": "gcloud",
        "os": "Linux, macOS, Windows",
        "category": "Cloud",
        "frequency": "High",
        "tooltip": "Google Cloud CLI",
        "usage": "gcloud compute instances list",
        "description": "Command-line interface for Google Cloud Platform."
    },
];

// --- DOM Elements ---
const commandListContainer = document.getElementById('commandListContainer');
const commandSearchInput = document.getElementById('commandSearch');
const detailModal = document.getElementById('commandDetailModal');
const searchResultsCount = document.getElementById('searchResultsCount');

let currentlyExpandedItem = null;


// --- CORE FUNCTIONS ---

/**
 * Sorts commands alphabetically by command name.
 * @param {Array} arr - The array of command objects.
 * @returns {Array} - The sorted array.
 */
function sortCommands(arr) {
    return arr.sort((a, b) => a.command.localeCompare(b.command));
}

/**
 * Renders the command items onto the main container.
 * @param {Array} commands - The commands to display.
 */
function renderCommands(commands) {
    commandListContainer.innerHTML = '';
    if (commands.length === 0) {
        commandListContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px;">No commands found matching your search.</p>';
        searchResultsCount.textContent = '0 results';
        return;
    }
    
    const sortedCommands = sortCommands(commands);

    sortedCommands.forEach(cmd => {
        const item = document.createElement('div');
        item.className = 'command-item';
        item.setAttribute('data-command', cmd.command);
        item.setAttribute('data-tooltip', `${cmd.category} | ${cmd.os}`);
        
        item.innerHTML = `
            <strong>${cmd.command}</strong>
            <span>${cmd.os} | ${cmd.category}</span>
        `;
        
        item.addEventListener('click', () => openDetailModal(cmd));
        commandListContainer.appendChild(item);
    });

    searchResultsCount.textContent = `${commands.length} command(s) displayed.`;
}

/**
 * Handles the real-time searching logic.
 */
function handleSearch() {
    const searchTerm = commandSearchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderCommands(commandData);
        return;
    }

    const filteredCommands = commandData.filter(cmd => 
        cmd.command.toLowerCase().includes(searchTerm) ||
        cmd.category.toLowerCase().includes(searchTerm) ||
        cmd.description.toLowerCase().includes(searchTerm)
    );

    renderCommands(filteredCommands);
}

/**
 * Opens the modal and populates it with command details.
 * Ensures only one modal is expanded at a time.
 * @param {Object} cmd - The command object details.
 */
function openDetailModal(cmd) {
    // 1. Close any currently open modal first
    if (currentlyExpandedItem) {
        closeDetailModal();
    }

    // 2. Populate Modal Content
    document.getElementById('detailCommandName').textContent = cmd.command;
    document.getElementById('detailCommandOS').textContent = `Platform(s): ${cmd.os}`;
    document.getElementById('detailCommandDescription').textContent = cmd.description;
    document.getElementById('detailCommandUsage').textContent = cmd.usage;

    // 3. Display Modal
    detailModal.style.display = "block";
    currentlyExpandedItem = detailModal;

    // 4. Attach Copy Listener (needs to be attached dynamically)
    const copyBtn = document.getElementById('copyCommandBtn');
    const copyStatus = document.getElementById('copyStatus');

    copyBtn.onclick = () => {
        navigator.clipboard.writeText(cmd.usage).then(() => {
            copyStatus.textContent = 'Copied!';
            setTimeout(() => copyStatus.textContent = '', 2000);
        }).catch(err => {
            console.error('Could not copy text: ', err);
            copyStatus.textContent = 'Failed to copy.';
            setTimeout(() => copyStatus.textContent = '', 2000);
        });
    };
}

/**
 * Closes the currently open detail modal.
 */
function closeDetailModal() {
    if (currentlyExpandedItem) {
        currentlyExpandedItem.style.display = "none";
        currentlyExpandedItem = null;
    }
}


// --- INITIALIZATION AND EVENT LISTENERS ---

document.addEventListener('DOMContentLoaded', () => {
    renderCommands(commandData);
    
    // Real-time search listener
    commandSearchInput.addEventListener('keyup', handleSearch);

    // Modal Close Listeners
    const closeModalBtn = document.querySelector('.close-button');
    
    closeModalBtn.addEventListener('click', closeDetailModal);

    // Close when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === detailModal) {
            closeDetailModal();
        }
    });

});
