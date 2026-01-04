# SailDash Widget API Structure

This document defines the API contract for the SailDash embeddable widgets system. This API will be implemented as Vercel serverless functions (Next.js API routes) in a separate project.

## Public Widget Endpoint

### Endpoint

```
GET /api/public/clubs/:clubId/widget
```

### Query Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `limitTeams` | number | Maximum number of teams to return | 10 |
| `limitEvents` | number | Maximum number of events to return | 10 |

### Example Request

```
GET /api/public/clubs/pwycwi/widget?limitTeams=6&limitEvents=5
```

### Response Structure

```json
{
  "club": {
    "id": "pwycwi",
    "name": "Port Washington Yacht Club",
    "slug": "pwycwi",
    "profileUrl": "https://saildash.club/clubs/pwycwi",
    "logoUrl": "https://cdn.saildash.club/clubs/pwycwi/logo.png"
  },
  "teams": [
    {
      "id": "team-123",
      "name": "Racing Team Alpha",
      "imageUrl": "https://cdn.saildash.club/teams/team-123/image.jpg",
      "url": "https://saildash.club/clubs/pwycwi/teams/team-123"
    }
  ],
  "events": [
    {
      "id": "event-456",
      "title": "Spring Regatta",
      "startTime": "2024-05-15T10:00:00Z",
      "endTime": "2024-05-15T18:00:00Z",
      "url": "https://saildash.club/clubs/pwycwi/events/event-456",
      "location": "PWYC Main Dock"
    }
  ]
}
```

### Response Fields

#### Club Object

- `id` (string, required): Unique club identifier
- `name` (string, required): Display name of the club
- `slug` (string, required): URL-friendly identifier
- `profileUrl` (string, required): Full URL to club profile page
- `logoUrl` (string, optional): URL to club logo image

#### Teams Array

Each team object contains:

- `id` (string, required): Unique team identifier (public-safe)
- `name` (string, required): Display name of the team
- `imageUrl` (string, optional): URL to team image/photo
- `url` (string, required): Full URL to team profile page

#### Events Array

Each event object contains:

- `id` (string, required): Unique event identifier (public-safe)
- `title` (string, required): Event title/name
- `startTime` (string, required): ISO 8601 datetime string
- `endTime` (string, optional): ISO 8601 datetime string
- `url` (string, required): Full URL to event details page
- `location` (string, optional): Event location name

### Security & Privacy Rules

1. **Public Data Only**: Only return data flagged as `visibility: public`
2. **No PII**: No personally identifiable information (names, emails, phone numbers)
3. **No Internal IDs**: Use public-safe identifiers only
4. **Private Events**: Hide events with `visibility: private` or `visibility: members-only`
5. **Rate Limiting**: Implement IP-based rate limiting (recommended: 60 requests/minute per IP)

### CORS Headers

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
Access-Control-Allow-Headers: Content-Type
```

For production, consider restricting to known domains:

```
Access-Control-Allow-Origin: https://pwyc.org,https://saildash.club
```

### Cache Headers

```
Cache-Control: public, max-age=60, stale-while-revalidate=300
```

This allows:
- Public caching for 60 seconds
- Stale content can be served for up to 300 seconds while revalidating in background

### Error Responses

#### 404 Not Found

```json
{
  "error": "Club not found",
  "clubId": "invalid-club-id"
}
```

#### 429 Too Many Requests

```json
{
  "error": "Rate limit exceeded",
  "retryAfter": 60
}
```

#### 500 Internal Server Error

```json
{
  "error": "Internal server error"
}
```

## Widget Embedding

### Script Tag Method

```html
<div 
  id="saildash-club-widget" 
  data-club="pwycwi" 
  data-theme="dark" 
  data-view="panel"
  data-limit-teams="6"
  data-limit-events="5"
></div>
<script async src="https://cdn.saildash.club/widgets/v1/saildash-widgets.js"></script>
```

### Data Attributes

| Attribute | Type | Description | Default |
|-----------|------|-------------|---------|
| `data-club` | string | Club identifier (required) | - |
| `data-theme` | string | Theme: `dark` or `light` | `dark` |
| `data-view` | string | Widget view: `panel`, `teams`, `events`, `badge` | `panel` |
| `data-limit-teams` | number | Maximum teams to display | 10 |
| `data-limit-events` | number | Maximum events to display | 10 |
| `data-accent` | string | Accent color (hex, optional) | Theme default |
| `data-radius` | string | Border radius: `sm`, `md`, `lg` | `md` |

### React Component Method

```jsx
import { SaildashClubPanel } from '@saildash/widgets-react'

<SaildashClubPanel 
  clubId="pwycwi" 
  theme="dark" 
  limitTeams={6}
  limitEvents={5}
/>
```

### iFrame Method

```html
<iframe 
  src="https://widgets.saildash.club/club/pwycwi/panel?theme=dark&limitTeams=6&limitEvents=5"
  width="100%"
  height="600"
  frameborder="0"
></iframe>
```

## Implementation Notes

- **Widget Script**: The widget script (`saildash-widgets.js`) will be built as a static file and served from the `public/` folder or CDN. No serverless function invocations for the script itself.
- **Data API Endpoint**: Only the data API endpoint (`/api/public/clubs/:clubId/widget`) will be implemented as a Vercel serverless function (Next.js API route).
- Data source will be determined by the main SailDash project architecture
- All timestamps should be in ISO 8601 format (UTC)
- Image URLs should be absolute and use CDN when available
- The endpoint should handle missing optional fields gracefully
- Consider implementing GraphQL for more flexible queries in the future

## Widget Script Architecture

The widget script should be:
- Built as a static JavaScript bundle
- Hosted at: `cdn.saildash.club/widgets/v1/saildash-widgets.js` (or served from `public/` folder)
- Self-contained with no runtime dependencies on serverless functions
- Only makes HTTP requests to the data API endpoint for fetching club/team/event data

## Versioning

The API version is indicated in the path:

- `/api/public/clubs/:clubId/widget` - Current version (v1)
- Future versions: `/api/v2/public/clubs/:clubId/widget`

Version 1 will never break. New features will be added to new versions.

