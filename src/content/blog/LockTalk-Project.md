# Deep Project Analysis: P2P Encrypted Chat Application

Based on the folder structure, this is a **peer-to-peer encrypted messaging application** featuring a Python backend and a React/TypeScript frontend.

## 1. Main Folders & Files Overview

### Root Level Files
- `run.py` - Main entry point to start the application
- `main_bundle.py` & `main_bundle.spec` - PyInstaller bundling configuration for creating standalone executables
- `requirements.txt` - Python dependencies
- `package-lock.json` - Node.js dependencies (likely for frontend tooling)
- `structure.txt` - Project structure documentation

### src/ - Backend (Python)
The core application logic written in Python, organized into modules:
- `src/main.py` - Main backend application file
- `src/crypto/` - Cryptographic operations (encryption, key management, handshakes)
- `src/net/` - Networking layer (client, server, connections, peer discovery)
- `src/protocol/` - Message protocol definitions and framing
- `src/storage/` - Database and key storage management
- `src/ui/` - UI integration (likely PyQt or similar for desktop app)

### frontend/ - Frontend (React + TypeScript)
Modern web-based UI built with React and Vite:
- `frontend/src/` - All React source code
- `frontend/src/components/` - Reusable UI components
- `frontend/src/pages/` - Main application pages/views
- `frontend/src/services/` - API communication, WebSocket, state management
- `frontend/src/hooks/` - React custom hooks
- `frontend/src/types/` - TypeScript type definitions

---

## 2. Most Important Files by Category

### 🚀 Starting the Program
- `run.py` - Primary entry point (likely starts both backend and frontend)
- `src/main.py` - Main backend initialization
- `frontend/index.html` - Frontend entry HTML
- `frontend/src/main.tsx` - React application entry point

### ⚙️ Backend Logic (Critical)
- `src/main.py` - Application orchestration
- `src/net/connection_manager.py` - Manages all peer connections
- `src/crypto/handshake.py` - Secure connection establishment
- `src/crypto/crypto_utils.py` - Encryption/decryption operations
- `src/protocol/messages.py` - Message structure definitions
- `src/net/server.py` - Server-side networking
- `src/net/client.py` - Client-side networking
- `src/net/discovery.py` - Peer discovery mechanism

### 🎨 Frontend/UI (Critical)
- `frontend/src/App.tsx` - Root React component
- `frontend/src/pages/DashboardPage.tsx` - Main application interface
- `frontend/src/pages/LandingPage.tsx` - Welcome/login screen
- `frontend/src/components/chat/ChatPane.tsx` - Main chat interface
- `frontend/src/services/ws.ts` - WebSocket communication with backend
- `frontend/src/services/api.ts` - REST API calls to backend
- `frontend/src/components/peers/PeerList.tsx` - Display available peers

### 🔧 Configuration & Settings
- `requirements.txt` - Python dependencies list
- `frontend/package.json` - Node.js dependencies and scripts
- `frontend/vite.config.ts` - Vite bundler configuration
- `frontend/tailwind.config.ts` - Tailwind CSS styling configuration
- `frontend/tsconfig.json` - TypeScript compiler settings
- `src/components/settings/KeyManager.tsx` - User key management UI

### 💾 Database/Data Handling
- `src/storage/db.py` - Database operations (likely SQLite)
- `src/storage/key_manager.py` - Cryptographic key storage
- `frontend/src/services/state.ts` - Frontend state management

### 🌐 Networking & Communication
- `src/net/connection.py` - Individual connection handling
- `src/net/connection_manager.py` - Connection pool management
- `src/protocol/framing.py` - Message framing/serialization
- `frontend/src/services/ws.ts` - WebSocket client

---

## 3. Detailed File Explanations

### Backend Python Files

**Crypto Module**
- `crypto/identity.py`: User identity management, public/private key generation
- `crypto/handshake.py`: Diffie-Hellman or similar key exchange for secure connections
- `crypto/crypto_utils.py`: AES/RSA encryption, signature verification, hashing

**Network Module**
- `net/server.py`: Listens for incoming peer connections
- `net/client.py`: Initiates outgoing connections to peers
- `net/connection.py`: Represents a single peer connection with send/receive methods
- `net/connection_manager.py`: Tracks all active connections, routes messages
- `net/discovery.py`: Finds peers on local network or via DHT/tracker

**Protocol Module**
- `protocol/messages.py`: Defines message types (TEXT, FILE_TRANSFER, HANDSHAKE, etc.)
- `protocol/framing.py`: Packs/unpacks messages into byte streams with length prefixes

**Storage Module**
- `storage/db.py`: SQLite database for chat history, peer info
- `storage/key_manager.py`: Securely stores private keys (encrypted at rest)

**UI Module**
- `ui/main_window.py`: Desktop window wrapper (possibly embeds the web frontend)

### Frontend React Files

**Components**
- `chat/ChatInput.tsx`: Text input area with send button
- `chat/ChatMessage.tsx`: Individual message bubble component
- `chat/ChatPane.tsx`: Full chat conversation display
- `peers/PeerCard.tsx`: Single peer display with status indicator
- `peers/PeerList.tsx`: List of all discovered peers
- `settings/KeyManager.tsx`: UI for exporting/importing encryption keys
- `tutorial/TutorialOverlay.tsx`: First-time user onboarding
- `core/Button.tsx`: Reusable button component
- `core/Header.tsx`: App header with logo and navigation

**Services**
- `services/api.ts`: REST API wrapper for backend calls (get peers, send messages)
- `services/ws.ts`: WebSocket connection for real-time message delivery
- `services/state.ts`: Global state management (Redux/Zustand/Context)

**Hooks**
- `hooks/useMessages.ts`: Fetches and manages chat messages
- `hooks/usePeers.ts`: Manages peer connection state
- `hooks/useTutorial.tsx`: Controls tutorial flow

**Pages**
- `pages/LandingPage.tsx`: Initial screen (welcome, setup keys)
- `pages/DashboardPage.tsx`: Main app interface (peer list + chat)
- `pages/NotFoundPage.tsx`: 404 error page

---

## 4. Suggested Study Order

**Phase 1: Understand the Architecture (Start Here)**
1. `README.md` (root) - Read project overview and setup instructions
2. `run.py` - See how the app starts
3. `src/main.py` - Understand backend initialization
4. `frontend/src/App.tsx` - Understand frontend structure
5. `frontend/src/pages/DashboardPage.tsx` - See main UI layout

**Phase 2: Backend Deep Dive**
1. `src/protocol/messages.py` - Understand message types
2. `src/crypto/identity.py` - How users are identified
3. `src/crypto/handshake.py` - Connection security
4. `src/net/discovery.py` - How peers find each other
5. `src/net/connection_manager.py` - Connection lifecycle
6. `src/storage/db.py` - Data persistence

**Phase 3: Frontend Deep Dive**
1. `frontend/src/services/ws.ts` - Real-time communication
2. `frontend/src/services/api.ts` - Backend API integration
3. `frontend/src/hooks/usePeers.ts` - Peer state management
4. `frontend/src/hooks/useMessages.ts` - Message handling
5. `frontend/src/components/chat/ChatPane.tsx` - Chat UI

**Phase 4: Advanced Features**
1. `frontend/src/components/tutorial/TutorialOverlay.tsx` - User onboarding
2. `frontend/src/components/settings/KeyManager.tsx` - Key management
3. `src/storage/key_manager.py` - Key storage backend

---

## 5. Potential Bug/Edit Hotspots

### High Risk for Bugs
- `src/net/connection_manager.py`: Complex state management, race conditions
- `src/crypto/handshake.py`: Security vulnerabilities if implemented incorrectly
- `src/protocol/framing.py`: Buffer overflow, parsing errors
- `frontend/src/services/ws.ts`: Connection drops, message loss, reconnection logic
- `src/net/discovery.py`: Network timeouts, firewall issues
- `src/storage/db.py`: Data corruption, migration issues

### Common Edit Areas
- `frontend/src/components/chat/ChatInput.tsx`: Adding features like emoji, file upload
- `src/protocol/messages.py`: Adding new message types
- `frontend/src/services/state.ts`: Managing app state changes
- `src/crypto/crypto_utils.py`: Upgrading encryption algorithms

### Configuration Files (Often Edited)
- `requirements.txt`: Adding Python libraries
- `frontend/package.json`: Adding npm packages
- `frontend/vite.config.ts`: Build optimizations
- `frontend/tailwind.config.ts`: Styling customization