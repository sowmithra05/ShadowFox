# IPL Team Hub - Mumbai Indians Fan Community Platform

A complete web application for Mumbai Indians fans featuring team dashboard, player profiles, match center, and community discussions.

## Project Structure

```
ipl_team_hub/
├── server.js                    # Node.js backend server
├── package.json                 # Project dependencies
├── public/                      # Frontend files
│   └── pages/
│       ├── user_registration.html   # 3-step registration form
│       ├── login.html               # Login page
│       ├── team_dashboard.html      # Team dashboard with stats
│       ├── player_profiles.html     # Player profiles page
│       ├── match_center.html        # Live match center
│       └── fan_community.html       # Community discussions
└── images/                      # Player images folder
    ├── Rohit Sharma.png
    ├── Jasprit Bumrah.png
    ├── Hardik Pandya.png
    └── Ishan Kishan.png
```

## Features

### 1. User Registration (3-Step Process)
- **Step 1**: Personal Information (name, email, password, DOB)
- **Step 2**: Team Preferences (favorite team, players, notifications)
- **Step 3**: Verification (profile photo, terms acceptance)

### 2. Login System
- Email/password authentication
- Social login options (Google, Facebook)
- Remember me functionality
- Password reset option

### 3. Team Dashboard
- Team statistics and current position
- Next match countdown timer
- Recent match results
- Top performers showcase
- Fan polls and community activity

### 4. Player Profiles
- Complete squad information
- Player statistics (runs, wickets, economy)
- Search and filter functionality
- Player comparison feature
- Favorite players tracking

### 5. Match Center
- Live match scores with real-time updates
- Ball-by-ball commentary
- Current partnership details
- Recent overs visualization
- AI predictions and win probability
- Live polls and discussions

### 6. Fan Community
- Discussion threads and forums
- Create polls and threads
- Trending topics and hashtags
- Community highlights
- Search and category filters

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: bcrypt for password hashing
- **Session Management**: express-session

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)

### Steps

1. **Install MongoDB** (if not already installed)
   ```bash
   # For Windows: Download from mongodb.com
   # For Mac: brew install mongodb-community
   # For Linux: Follow official MongoDB installation guide
   ```

2. **Start MongoDB**
   ```bash
   mongod
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Create Project Structure**
   ```
   mkdir -p public/pages
   mkdir images
   ```

5. **Move HTML Files**
   - Place all HTML files in `public/pages/` directory
   - Place player images in `images/` directory

6. **Start the Server**
   ```bash
   npm start
   ```

7. **Access the Application**
   - Open browser and navigate to: `http://localhost:3000`
   - Available pages:
     - Registration: `http://localhost:3000/pages/user_registration.html`
     - Login: `http://localhost:3000/pages/login.html`
     - Dashboard: `http://localhost:3000/pages/team_dashboard.html`
     - Players: `http://localhost:3000/pages/player_profiles.html`
     - Matches: `http://localhost:3000/pages/match_center.html`
     - Community: `http://localhost:3000/pages/fan_community.html`

## Database Collections

### users
```javascript
{
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date
}
```

### players
```javascript
{
  name: String,
  role: String,
  batting: String,
  bowling: String,
  runs: Number,
  wickets: Number,
  average: Number,
  economy: Number,
  image: String,
  country: String,
  isCaptain: Boolean
}
```

### matches
```javascript
{
  opponent: String,
  date: String,
  result: String,
  score: String,
  venue: String
}
```

## API Endpoints

### Authentication
- `POST /api/register` - Register new user
- `POST /api/login` - User login
- `POST /api/logout` - User logout

### Data
- `GET /api/players` - Get all players
- `GET /api/matches` - Get all matches

## Features & Functionality

### Working Features
- ✅ User registration with 3-step form
- ✅ Login/logout functionality
- ✅ Password hashing with bcrypt
- ✅ Session management
- ✅ Real-time countdown timer
- ✅ Live score updates simulation
- ✅ Search functionality
- ✅ Filter and sort options
- ✅ Interactive polls
- ✅ Discussion forums
- ✅ All navigation links functional

### Alert Messages (For Demo)
- Profile photo upload
- Social login (Google, Facebook)
- Password reset
- Ticket booking
- Poll voting
- Player comparison
- Discussion threads
- File uploads

## Customization

### Adding New Players
Edit `server.js` and add to the players collection initialization:
```javascript
{
  name: 'Player Name',
  role: 'Batsman',
  batting: 'Right-handed',
  runs: 450,
  average: 35.5,
  image: 'player.png',
  country: 'India'
}
```

### Changing Team Colors
Edit the CSS in each HTML file:
- Primary color: `#004d99` (Mumbai Indians blue)
- Secondary color: `#ff6b35` (Accent orange)
- Gold: `#ffd700` (Highlights)

## Security Notes

- Passwords are hashed using bcrypt
- Session secret should be changed in production
- CORS should be configured for production
- Input validation should be enhanced
- Rate limiting should be added for API endpoints

## Future Enhancements

- Real API integration for live scores
- Email verification system
- Password reset via email
- File upload for profile photos
- Real-time chat functionality
- Push notifications
- Mobile responsive improvements
- Admin dashboard
- Payment gateway for fan club membership

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check MongoDB is on port 27017
- Verify MongoDB service is started

### Port Already in Use
- Change port in `server.js`: `const PORT = 3001;`

### Pages Not Loading
- Ensure files are in `public/pages/` directory
- Check file names match exactly

## Support

For issues or questions, please check:
1. MongoDB is running
2. All dependencies are installed
3. File structure matches documentation
4. Console for error messages

## License

This project is for educational purposes.

---

**Note**: This is a demonstration project. For production use, additional security measures, error handling, and features should be implemented.
