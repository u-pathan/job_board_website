<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Board</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="main-header">
        <div class="container">
            <h1>Job Board</h1>
            <nav>
                <ul>
                    <li><a href="#">Find Jobs</a></li>
                    <li><a href="#">Post a Job</a></li>
                    <li><a href="#">Companies</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main class="main-content">
        <div class="container">
            <section class="search-filter">
                <h2>Find Your Dream Job</h2>
                <form class="search-form">
                    <input type="text" placeholder="Job title, keywords, or company" class="search-input">
                    <input type="text" placeholder="Location (e.g., city, state, zip)" class="location-input">
                    <button type="submit" class="search-button">Search</button>
                </form>
                <div class="filters">
                    <select class="filter-select">
                        <option value="">Job Type</option>
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>
                    <select class="filter-select">
                        <option value="">Experience Level</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid Level</option>
                        <option value="senior">Senior Level</option>
                    </select>
                    <select class="filter-select">
                        <option value="">Industry</option>
                        <option value="tech">Technology</option>
                        <option value="finance">Finance</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
            </section>

            <section class="job-listings">
                <h2>Recent Job Postings</h2>

                <div class="job-card">
                    <h3>Software Engineer</h3>
                    <p class="company">Tech Innovators Inc.</p>
                    <p class="location">San Francisco, CA</p>
                    <p class="description">Developing cutting-edge software solutions...</p>
                    <span class="job-type">Full-time</span>
                    <a href="#" class="apply-button">Apply Now</a>
                </div>

                <div class="job-card">
                    <h3>Marketing Specialist</h3>
                    <p class="company">Creative Solutions Agency</p>
                    <p class="location">New York, NY</p>
                    <p class="description">Executing digital marketing campaigns...</p>
                    <span class="job-type">Full-time</span>
                    <a href="#" class="apply-button">Apply Now</a>
                </div>

                <div class="job-card">
                    <h3>Data Analyst</h3>
                    <p class="company">Global Analytics Corp.</p>
                    <p class="location">London, UK</p>
                    <p class="description">Analyzing large datasets to provide insights...</p>
                    <span class="job-type">Contract</span>
                    <a href="#" class="apply-button">Apply Now</a>
                </div>

                <div class="job-card">
                    <h3>UI/UX Designer</h3>
                    <p class="company">Design Forward Studio</p>
                    <p class="location">Remote</p>
                    <p class="description">Designing intuitive user interfaces...</p>
                    <span class="job-type">Full-time</span>
                    <a href="#" class="apply-button">Apply Now</a>
                </div>

                </section>
        </div>
    </main>

    <footer class="main-footer">
        <div class="container">
            <p>&copy; 2025 Job Board. All rights reserved.</p>
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
            </div>
        </div>
    </footer>
</body>
</html>
