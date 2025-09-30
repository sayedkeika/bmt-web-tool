# BMT System Overview

The tool follows a client-server architecture:

- The frontend communicates with the backend exclusively through REST API calls. 
- The backend is built with Laravel, exposes an API and manages data via a relational database.
- The admin dashboard provides an accessible UI for managing.

# Frontend

The frontend is a React-based single page application. It provides the assessment interface with core functional features like dynamic filtering logic, questionnaire rendering & navigation, saving progress, scoring logic, result generation and exports. API endpoints are wired to communicate with backend system for fetching questionnaire structure at start, saving drafts and fetching them in the future. Important aspects:

- UI behavior: Navigation bars, tooltips and other helpful components are implemented using React hooks.
- Component structure: When starting an assessment, the active questionnaire in the backend/admin dashboard is used. Each assessment level is rendered through reusable components. Criteria and requirements are flattened for rendering and navigation (structure may differ depending on level). Note that for content level to render, a backstop criterion needs to be met. Glossary items are saved in the frontend.
- Saving & Resuming: Users can save progress, which triggers a backend update. For filters to be recognized on resume, all filters are included in the request when saving and provided in the response.
- Answer handling: Responses are stored in local state and synced to the backend. Valid response scores are limited to 0, 1, 2 or null.
- Results: All results are generated using the recharts library and PDF export using html2canvas + jsPDF. Licenses are included and any additional licenses should always be respected.

When extending the frontend, changes must remain compatible with the backend validation rules and data structures

# Updates

Future updates may include adding new questionnaires, editing active questionnaire data including response options (requires coordinated backend & frontend changes for mapping labels to scores), adding items to glossary or adjusting frontend UI. 
For best practices, always clone and version questionnaires instead of directly modifying active ones to preserve past submissions integrity. After updating any part of the tool, always run tests to check UI rendering and API responses.

# References
- Backend API Documentation: https://adminbmt.star4bbs.eu/docs/
- Base Endpoint for the APIs: https://adminbmt.star4bbs.eu/api/
- Admin Management Dashboard: https://adminbmt.star4bbs.eu/
