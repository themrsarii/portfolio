import React, { useState } from 'react';
import { 
  CheckCircle2, Clock, Sparkles, AlertCircle, ArrowUpRight, 
  Layers, Database, Shield, Zap, Search, Bell,
  ThumbsUp, MessageSquare, Share2, UserPlus, Users, Bookmark,
  ShoppingBag, Home, Globe, Send, MoreHorizontal, Image, Smile,
  Heart, Check, X, User,
  Utensils, Receipt, Printer, Plus, Minus, CreditCard,
  Building2, Briefcase
} from 'lucide-react';

const SocialFeedMockup = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24);
  const [showComments, setShowComments] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [friendRequested, setFriendRequested] = useState(false);
  const [shareToast, setShareToast] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Sarah Jenkins',
      time: '2m ago',
      avatarBg: 'bg-emerald-600',
      initials: 'SJ',
      text: 'Dynamic AJAX feed is so smooth! Zero page reload makes a huge difference 🚀'
    }
  ]);

  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const newComment = {
      id: Date.now(),
      author: 'Muhammad Sarfaraz',
      time: 'Just now',
      avatarBg: 'bg-indigo-600',
      initials: 'MS',
      text: commentInput.trim()
    };
    setComments(prev => [...prev, newComment]);
    setCommentInput('');
    setShowComments(true);
  };

  const handleShare = () => {
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2400);
  };

  return (
    <div className="relative w-full h-full bg-[#080B10] text-xs font-sans select-none overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <div className="relative px-2.5 sm:px-3.5 py-2 border-b border-[#252B36]/80 bg-[#0C1017] flex items-center justify-between z-20 shrink-0">
        {/* Left: Brand & Search */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm shadow-indigo-600/30">
              S
            </div>
            <span className="font-bold text-[11px] sm:text-xs tracking-tight text-white hidden xs:inline">
              Sphere<span className="text-indigo-400">Social</span>
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141B24] border border-[#252B36] text-[10px] text-neutral-400">
            <Search className="w-3 h-3 text-neutral-500 shrink-0" />
            <span className="truncate max-w-[120px] lg:max-w-none">Search feed, friends...</span>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <div className="flex items-center gap-1">
          <button 
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 rounded-md text-indigo-400 bg-indigo-500/10 font-medium text-[10px] sm:text-[11px] border border-indigo-500/20"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Feed</span>
          </button>
          <button 
            type="button"
            className="flex items-center gap-1 px-2 py-1 text-neutral-400 hover:text-white text-[10px] sm:text-[11px] transition-colors"
          >
            <Users className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Friends</span>
          </button>
        </div>

        {/* Right: Status, Notifications & Profile */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Status Counter Badge */}
          <div className="hidden xs:flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Active:</span> Social Interactions
          </div>

          {/* Notifications Button with Dropdown Popover */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className={`relative p-1.5 rounded-lg border transition-colors ${
                showNotifications 
                  ? 'bg-indigo-600/20 border-indigo-500/50 text-indigo-300' 
                  : 'bg-[#141B24] border-[#252B36] text-neutral-300 hover:text-white hover:border-indigo-500/30'
              }`}
              title="Notifications"
            >
              <Bell className="w-3.5 h-3.5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#0C1017]">
                3
              </span>
            </button>

            {/* Notification Dropdown Popover */}
            {showNotifications && (
              <div className="absolute right-0 top-9 w-64 sm:w-72 bg-[#0E131C] border border-[#252B36] rounded-xl shadow-2xl p-2.5 z-50 text-[10px] space-y-1.5 animate-in fade-in zoom-in-95">
                <div className="flex items-center justify-between pb-1.5 border-b border-[#252B36]/80 text-[#98A1AF] font-mono text-[9px]">
                  <span className="font-semibold text-neutral-200">Notifications (3 Unread)</span>
                  <span className="text-indigo-400 cursor-pointer hover:underline" onClick={() => setShowNotifications(false)}>Close</span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-start gap-2 p-1.5 rounded-lg bg-[#141B24]/80 border border-indigo-500/20">
                    <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-3 h-3 fill-rose-500" />
                    </div>
                    <div>
                      <p className="text-neutral-200"><strong className="text-white">Hamza Ali</strong> liked your new project</p>
                      <span className="text-[8px] text-indigo-400 font-mono">2m ago • AJAX Reaction</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-1.5 rounded-lg bg-[#141B24]/50 hover:bg-[#141B24] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-3 h-3 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200"><strong className="text-white">Sarah Jenkins</strong> commented on feed</p>
                      <span className="text-[8px] text-neutral-400 font-mono">5m ago</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-1.5 rounded-lg bg-[#141B24]/50 hover:bg-[#141B24] transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <UserPlus className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200"><strong className="text-white">David Chen</strong> accepted your request</p>
                      <span className="text-[8px] text-neutral-400 font-mono">1h ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Avatar */}
          <div className="flex items-center gap-1.5">
            <div className="relative w-6 h-6 rounded-full bg-indigo-600 border border-indigo-400/40 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
              MS
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#080B10]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Three-Column / Responsive Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar (Desktop / Tablet) */}
        <div className="hidden md:flex flex-col w-36 lg:w-40 border-r border-[#252B36]/60 bg-[#0A0E15] p-2 space-y-1 shrink-0 text-[10px]">
          {/* User Profile Summary */}
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-[#121822] border border-[#252B36]/60 mb-1">
            <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
              MS
            </div>
            <div className="min-w-0">
              <span className="block font-semibold text-neutral-200 truncate leading-tight">Muhammad S.</span>
              <span className="block text-[8px] text-emerald-400 font-mono">Online</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-0.5">
            <button type="button" className="w-full flex items-center justify-between px-2 py-1.5 rounded-md bg-indigo-500/10 text-indigo-300 font-medium">
              <span className="flex items-center gap-1.5"><User className="w-3 h-3" /> Profile</span>
            </button>
            <button type="button" className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-[#121822] transition-colors">
              <span className="flex items-center gap-1.5"><Users className="w-3 h-3" /> Friends</span>
              <span className="text-[8px] font-mono bg-[#141B24] px-1 py-0.2 rounded border border-[#252B36]">342</span>
            </button>
            <button type="button" className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-[#121822] transition-colors">
              <span className="flex items-center gap-1.5"><Bookmark className="w-3 h-3" /> Saved</span>
              <span className="text-[8px] font-mono bg-[#141B24] px-1 py-0.2 rounded border border-[#252B36]">18</span>
            </button>
            <button type="button" className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-[#121822] transition-colors">
              <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Groups</span>
              <span className="text-[8px] font-mono bg-[#141B24] px-1 py-0.2 rounded border border-[#252B36]">12</span>
            </button>
            <button type="button" className="w-full flex items-center justify-between px-2 py-1.5 rounded-md text-neutral-400 hover:text-neutral-200 hover:bg-[#121822] transition-colors">
              <span className="flex items-center gap-1.5"><ShoppingBag className="w-3 h-3" /> Marketplace</span>
              <span className="text-[8px] font-mono text-emerald-400">New</span>
            </button>
          </div>

          {/* Session Footer Pill */}
          <div className="mt-auto pt-2 border-t border-[#252B36]/60 text-[9px] font-mono text-neutral-400">
            <div className="flex items-center gap-1 text-indigo-400">
              <Shield className="w-3 h-3 shrink-0" />
              <span className="truncate">PHP Session Auth</span>
            </div>
            <span className="text-[8px] text-neutral-500 block truncate">MySQL Connection Pool</span>
          </div>
        </div>

        {/* Center Feed (Full-Width on Mobile, Scrollable) */}
        <div className="flex-1 flex flex-col overflow-y-auto p-2 sm:p-2.5 space-y-2 no-scrollbar">
          {/* Create Post Widget */}
          <div className="bg-[#0E131A] rounded-lg p-2 sm:p-2.5 border border-[#252B36]/70 shadow-sm shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                MS
              </div>
              <div className="flex-1 bg-[#141B24] border border-[#252B36] rounded-full px-3 py-1.5 text-[10px] text-neutral-400 cursor-pointer hover:border-indigo-500/40 transition-colors">
                What's on your mind, Sarfaraz?
              </div>
            </div>
            <div className="mt-2 pt-1.5 border-t border-[#252B36]/50 flex items-center justify-between text-[9px] text-neutral-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 cursor-pointer">
                  <Image className="w-3 h-3" /> Photo/Video
                </span>
                <span className="flex items-center gap-1 text-amber-400 hover:text-amber-300 cursor-pointer hidden xs:flex">
                  <Smile className="w-3 h-3" /> Feeling
                </span>
              </div>
              <button 
                type="button"
                className="px-2.5 py-0.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-[9px] transition-colors"
              >
                Post
              </button>
            </div>
          </div>

          {/* Sample Feed Card */}
          <div className="bg-[#0E131A] rounded-lg p-2.5 sm:p-3 border border-[#252B36]/80 shadow-md space-y-2 shrink-0">
            {/* Post Author Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1.5px] shrink-0">
                  <div className="w-full h-full rounded-full bg-[#0E131A] flex items-center justify-center font-bold text-[9px] text-white">
                    MS
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-[#0E131A]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-neutral-100 text-[11px] sm:text-xs">Muhammad Sarfaraz</span>
                    <span className="px-1.5 py-0.2 rounded text-[8px] font-mono bg-indigo-950/70 text-indigo-300 border border-indigo-500/20">
                      Author
                    </span>
                  </div>
                  <span className="text-[9px] text-neutral-400 flex items-center gap-1">
                    Just now • <Globe className="w-2.5 h-2.5 text-neutral-500" /> Public
                  </span>
                </div>
              </div>
              <MoreHorizontal className="w-3.5 h-3.5 text-neutral-500 cursor-pointer hover:text-neutral-300" />
            </div>

            {/* Post Content Hook */}
            <div>
              <p className="text-[11px] sm:text-xs font-semibold text-neutral-100 leading-snug">
                Just completed my new project 🚀
              </p>
              <p className="text-[10px] text-neutral-300 mt-0.5 leading-relaxed">
                Full-stack social networking platform engineered with dynamic AJAX interactions, session-based auth, and relational MySQL data modeling.
              </p>
            </div>

            {/* Project Image / Visual Preview Box */}
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-[#121926] via-[#0D121B] to-[#151D2C] border border-indigo-500/30 p-3 sm:p-4 text-center">
              <div className="absolute top-2 right-2 flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-mono bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                <Zap className="w-2.5 h-2.5 text-amber-400" /> Zero Reloads
              </div>
              <span className="block text-[9px] font-mono text-indigo-400 uppercase tracking-wider mb-1 font-semibold">
                Architecture Blueprint
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                Social Networking Platform
              </h4>
              <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-1 max-w-xs mx-auto">
                User Feed ➔ AJAX Request ➔ PHP Handlers ➔ MySQL Tables ➔ Real-Time DOM
              </p>
              {/* Tech Badges Inside Preview */}
              <div className="flex flex-wrap justify-center items-center gap-1.5 mt-2.5">
                {['PHP 8', 'MySQL', 'Bootstrap 5', 'AJAX', 'jQuery'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-[#090C10]/80 border border-[#252B36] text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Metrics / Counters */}
            <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-neutral-400 pt-1 pb-1 border-b border-[#252B36]/60">
              <span className="flex items-center gap-1.5">
                <span className="flex -space-x-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-indigo-600 flex items-center justify-center text-[8px] text-white">👍</span>
                  <span className="w-3.5 h-3.5 rounded-full bg-rose-500 flex items-center justify-center text-[8px] text-white">❤️</span>
                </span>
                <span className="font-mono text-neutral-300 font-semibold">{likeCount} Likes</span>
              </span>
              <span>{comments.length} Comments • 3 Shares</span>
            </div>

            {/* Interactive Action Buttons (Like / Comment / Share) */}
            <div className="grid grid-cols-3 gap-1 pt-0.5">
              {/* Like Button */}
              <button
                type="button"
                onClick={handleLike}
                className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[10px] font-medium transition-all ${
                  isLiked 
                    ? 'text-indigo-400 bg-indigo-500/15 border border-indigo-500/40 shadow-sm shadow-indigo-500/10' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#151C26]'
                }`}
              >
                <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'scale-110 text-indigo-400 fill-indigo-400/20' : ''} transition-transform`} />
                <span>{isLiked ? 'Liked' : 'Like'}</span>
              </button>

              {/* Comment Button */}
              <button
                type="button"
                onClick={() => setShowComments(!showComments)}
                className={`flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[10px] font-medium transition-all ${
                  showComments 
                    ? 'text-indigo-400 bg-indigo-500/15 border border-indigo-500/30' 
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#151C26]'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Comment</span>
              </button>

              {/* Share Button */}
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[10px] font-medium text-neutral-400 hover:text-neutral-200 hover:bg-[#151C26] transition-colors"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>

            {/* Comments Thread & Interactive Input (Visible when toggled or initial state) */}
            {(showComments || comments.length > 0) && (
              <div className="pt-2 border-t border-[#252B36]/60 space-y-2">
                {/* Comments List */}
                <div className="space-y-1.5 max-h-24 overflow-y-auto no-scrollbar">
                  {comments.map((c) => (
                    <div key={c.id} className="flex items-start gap-1.5 text-[9px] sm:text-[10px]">
                      <div className={`w-5 h-5 rounded-full ${c.avatarBg} text-white flex items-center justify-center font-bold text-[8px] shrink-0 mt-0.5`}>
                        {c.initials}
                      </div>
                      <div className="bg-[#141B24] rounded-lg px-2.5 py-1.5 flex-1 border border-[#252B36]/60">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-neutral-200">{c.author}</span>
                          <span className="text-[8px] text-neutral-500 font-mono">{c.time}</span>
                        </div>
                        <p className="text-neutral-300 mt-0.5 leading-snug">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Input Form */}
                <form onSubmit={handleAddComment} className="flex items-center gap-1.5 pt-1">
                  <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-[8px] shrink-0">
                    MS
                  </div>
                  <input
                    type="text"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    placeholder="Write a comment (AJAX powered)..."
                    className="flex-1 bg-[#141B24] border border-[#252B36] focus:border-indigo-500/70 rounded-full px-2.5 py-1 text-[9px] sm:text-[10px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="p-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shrink-0 disabled:opacity-50"
                    disabled={!commentInput.trim()}
                    title="Send comment"
                  >
                    <Send className="w-2.5 h-2.5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar (Friend Suggestions + Online Friends on XL Screens) */}
        <div className="hidden xl:flex flex-col w-40 border-l border-[#252B36]/60 bg-[#0A0E15] p-2 space-y-2.5 shrink-0 text-[10px]">
          {/* Friend Suggestions */}
          <div>
            <span className="text-[9px] font-mono text-neutral-400 block mb-1 uppercase tracking-wider font-semibold">
              Friend Requests
            </span>
            <div className="p-2 rounded-lg bg-[#121822] border border-[#252B36]/60 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                  HA
                </div>
                <div className="min-w-0">
                  <span className="block font-semibold text-neutral-200 truncate leading-tight">Hamza Ali</span>
                  <span className="block text-[8px] text-neutral-400">3 mutual</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setFriendRequested(!friendRequested)}
                className={`w-full py-1 rounded text-[9px] font-medium transition-colors flex items-center justify-center gap-1 ${
                  friendRequested 
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                }`}
              >
                {friendRequested ? (
                  <>
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                    <span>Request Sent</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-2.5 h-2.5" />
                    <span>Add Friend</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Online Friends List */}
          <div>
            <span className="text-[9px] font-mono text-neutral-400 block mb-1 uppercase tracking-wider font-semibold">
              Online Contacts
            </span>
            <div className="space-y-1">
              {[
                { name: 'Sarah Jenkins', init: 'SJ', color: 'bg-emerald-600' },
                { name: 'David Chen', init: 'DC', color: 'bg-blue-600' },
                { name: 'Ayesha Malik', init: 'AM', color: 'bg-rose-600' }
              ].map(f => (
                <div key={f.name} className="flex items-center gap-1.5 p-1 rounded hover:bg-[#121822] transition-colors">
                  <div className="relative">
                    <div className={`w-4 h-4 rounded-full ${f.color} flex items-center justify-center text-[7px] font-bold text-white`}>
                      {f.init}
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 border border-[#0A0E15]" />
                  </div>
                  <span className="text-[9px] text-neutral-300 truncate">{f.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Share Toast Notification */}
      {shareToast && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-indigo-600 text-white text-[10px] font-medium shadow-xl flex items-center gap-1.5 z-30 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-3 h-3 text-emerald-300" />
          <span>Link copied to clipboard!</span>
        </div>
      )}
    </div>
  );
};

const UrduFoodBusinessMockup = () => {
  const [activeTab, setActiveTab] = useState('products'); // 'products' | 'freezer' | 'admin' | 'contact'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [freezerSubmitted, setFreezerSubmitted] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [shopName, setShopName] = useState('');
  const [shopCity, setShopCity] = useState('');
  const [shopPhone, setShopPhone] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMsg, setContactMsg] = useState('');

  const products = [
    {
      id: 'kulfi',
      nameUrdu: 'دیسی قلفی',
      nameEng: 'Desi Khoya Kulfi',
      tag: 'سب سے مقبول',
      emoji: '🍦',
      desc: 'خالص دودھ، تازہ کھویا، پستہ اور زعفران سے تیار کردہ روایتی شاہپوری قلفی۔',
      packaging: '12 عدد فی باکس • -18°C',
      specs: ['100% خالص دودھ', 'بغیر کیمیکل و ملاوٹ', 'روایتی کھویا ریسیپی']
    },
    {
      id: 'ghee',
      nameUrdu: 'خالص دیسی گھی',
      nameEng: 'Pure Desi Ghee',
      tag: '100% پیور',
      emoji: '🧈',
      desc: 'گھریلو روایتی بلونے سے تیار شدہ خوشبودار اور دانے دار خالص دیسی گھی۔',
      packaging: '1 کلو گرام اور 5 کلو جار',
      specs: ['قدرتی مکھن سے تیار', 'دانے دار اور خوشبودار', 'لیب ٹیسٹ شدہ معیار']
    },
    {
      id: 'khoya',
      nameUrdu: 'تازہ ڈیری کھویا',
      nameEng: 'Fresh Dairy Khoya',
      tag: 'مٹھائی اسپیشل',
      emoji: '🥛',
      desc: 'تازہ بھینس کے دودھ کو کڑاہی میں پکا کر تیار کیا گیا معیاری نرم کھویا۔',
      packaging: '1kg / 5kg فریش پیکنگ',
      specs: ['قدرتی فیٹ پر مشتمل', 'حلوہ جات اور مٹھائی کے لیے', 'روزانہ تازہ سپلائی']
    },
    {
      id: 'makhan',
      nameUrdu: 'روایتی مکھن',
      nameEng: 'Hand-Churned Makhan',
      tag: 'قدرتی اجزاء',
      emoji: '🧀',
      desc: 'روایتی انداز میں ہاتھ سے بلونا ہوا قدرتی اور تازہ سفید دیسی مکھن۔',
      packaging: 'کولڈ چین پیکنگ',
      specs: ['بغیر کسی پریزرویٹو', 'خالص دیسی ذائقہ', 'حفظان صحت کے اصول']
    }
  ];

  const handleFreezerApply = (e) => {
    e.preventDefault();
    if (!shopName.trim() || !shopPhone.trim()) return;
    setFreezerSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName.trim() || !contactPhone.trim()) return;
    setContactSubmitted(true);
  };

  return (
    <div className="relative w-full h-full bg-[#080B10] text-xs font-sans select-none overflow-hidden flex flex-col">
      {/* Top Navbar */}
      <div className="relative px-2.5 sm:px-3.5 py-2 border-b border-[#252B36]/80 bg-[#0C1017] flex items-center justify-between z-20 shrink-0">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm shadow-amber-500/30 shrink-0">
            BSF
          </div>
          <div className="min-w-0">
            <span className="font-bold text-[11px] sm:text-xs tracking-tight text-white block truncate leading-tight">
              بلال شاہپور فوڈز
            </span>
            <span className="text-[8px] font-mono text-amber-400 block truncate">
              Bilal Shahpur Foods
            </span>
          </div>
        </div>

        {/* Navigation Tabs (Scrollable on small mobile) */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          <button
            type="button"
            onClick={() => { setActiveTab('products'); setSelectedProduct(null); }}
            className={`px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors shrink-0 ${
              activeTab === 'products'
                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            مصنوعات
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('freezer'); setSelectedProduct(null); }}
            className={`flex items-center gap-1 px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors shrink-0 ${
              activeTab === 'freezer'
                ? 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <span>فریزر اسکیم</span>
            <span className="px-1 py-0.2 rounded text-[7px] font-bold bg-cyan-500 text-[#080B10]">
              مفت
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('admin'); setSelectedProduct(null); }}
            className={`px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors shrink-0 ${
              activeTab === 'admin'
                ? 'bg-purple-500/15 border border-purple-500/30 text-purple-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            ایڈمن
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('contact'); setSelectedProduct(null); }}
            className={`hidden xs:inline-block px-2 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-colors shrink-0 ${
              activeTab === 'contact'
                ? 'bg-indigo-500/15 border border-indigo-500/30 text-indigo-300'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            رابطہ
          </button>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[9px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">Live:</span> Production
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-2 sm:p-2.5 space-y-2 no-scrollbar">
        {/* VIEW 1: PRODUCTS SHOWCASE */}
        {activeTab === 'products' && (
          <div className="space-y-2">
            {/* Hero Banner with Urdu-first branding */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#171A21] via-[#10141D] to-[#1D1714] border border-[#252B36] p-2.5 sm:p-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="min-w-0" dir="rtl">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                      روایتی شاہپوری ڈیری برانڈ
                    </span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-tight">
                    خالص دیسی ڈیری مصنوعات کا بااعتماد نام
                  </h3>
                  <p className="text-[9px] sm:text-[10px] text-neutral-300 mt-0.5 line-clamp-1">
                    دیسی قلفی، قدرتی دیسی گھی، تازہ کھویا اور دیسی مکھن - 100% خالص دودھ سے تیار کردہ۔
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveTab('freezer')}
                  className="self-start sm:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-white text-[10px] font-bold shadow-md shadow-amber-600/20 transition-all hover:scale-[1.02]"
                >
                  <span>مفت ڈیپ فریزر اسکیم ➔</span>
                </button>
              </div>
            </div>

            {/* Product Cards Grid: 2 Columns on mobile, 4 Columns on md+ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg bg-[#0E131A] border border-[#252B36]/80 hover:border-amber-500/40 p-2 sm:p-2.5 flex flex-col justify-between transition-all hover:-translate-y-0.5 shadow-sm group cursor-pointer"
                  onClick={() => setSelectedProduct(item)}
                >
                  <div>
                    {/* Top Row: Tag + Emoji Icon */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-base sm:text-lg group-hover:scale-110 transition-transform">
                        {item.emoji}
                      </span>
                      <span className="px-1.5 py-0.2 rounded text-[7px] sm:text-[8px] font-mono bg-[#141B24] border border-[#252B36] text-neutral-300">
                        {item.tag}
                      </span>
                    </div>

                    {/* Product Name (Urdu & English) */}
                    <div dir="rtl">
                      <h4 className="text-[11px] sm:text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.nameUrdu}
                      </h4>
                      <span className="block text-[8px] sm:text-[9px] text-neutral-400 font-sans" dir="ltr">
                        {item.nameEng}
                      </span>
                    </div>

                    <p className="text-[8px] sm:text-[9px] text-neutral-400 mt-1 line-clamp-2 leading-tight" dir="rtl">
                      {item.desc}
                    </p>
                  </div>

                  {/* Packaging & Action */}
                  <div className="mt-2 pt-1.5 border-t border-[#252B36]/60 flex items-center justify-between">
                    <span className="text-[7px] sm:text-[8px] font-mono text-amber-400 truncate max-w-[65px] sm:max-w-none">
                      {item.packaging}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(item);
                      }}
                      className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 transition-colors"
                    >
                      تفصیلات
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Promotional Retailer Partnership Banner */}
            <div className="rounded-lg bg-gradient-to-r from-cyan-950/40 via-[#0E1520] to-[#0E131A] border border-cyan-500/30 p-2 sm:p-2.5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0" dir="rtl">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-sm shrink-0">
                  ❄️
                </div>
                <div className="min-w-0">
                  <span className="block text-[10px] sm:text-[11px] font-bold text-cyan-200 truncate">
                    دکانداروں کے لیے “مفت ڈیپ فریزر” پارٹنرشپ
                  </span>
                  <span className="block text-[8px] sm:text-[9px] text-neutral-400 truncate">
                    اپنی دکان پر بلال شاہپور قلفی رکھیں اور کمپنی سے فریزر حاصل کریں
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab('freezer')}
                className="shrink-0 px-2.5 py-1 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-[9px] sm:text-[10px] font-bold shadow-sm transition-colors"
              >
                درخواست دیں
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: FREEZER PARTNERSHIP FLOW */}
        {activeTab === 'freezer' && (
          <div className="rounded-lg bg-[#0E131A] border border-cyan-500/30 p-3 sm:p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-[#252B36] pb-2">
              <div dir="rtl">
                <div className="flex items-center gap-1.5">
                  <span className="px-1.5 py-0.2 rounded text-[8px] font-bold bg-cyan-500 text-[#080B10]">مفت فریزر اسکیم</span>
                  <h3 className="text-xs sm:text-sm font-bold text-white">ریٹیلر پارٹنرشپ درخواست فارم</h3>
                </div>
                <p className="text-[9px] text-neutral-400 mt-0.5">کریانہ، جنرل اسٹورز اور بیکرز کے لیے کمپنی اسپانسرڈ ڈیپ فریزر</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('products')}
                className="text-[9px] text-neutral-400 hover:text-white px-2 py-1 rounded bg-[#141B24] border border-[#252B36]"
              >
                ← واپس
              </button>
            </div>

            {freezerSubmitted ? (
              <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2" dir="rtl">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-base">
                  ✓
                </div>
                <h4 className="text-xs font-bold text-emerald-300">درخواست کامیابی سے موصول ہو گئی ہے!</h4>
                <p className="text-[9px] text-neutral-300 max-w-sm mx-auto">
                  بلال شاہپور فوڈز کا نمائندہ 24 سے 48 گھنٹوں کے اندر آپ کی دکان کا وزٹ کرے گا اور فریزر ڈیلیوری کا پروسیس مکمل کرے گا۔
                </p>
                <button
                  type="button"
                  onClick={() => { setFreezerSubmitted(false); setActiveTab('products'); }}
                  className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[9px] font-semibold transition-colors"
                >
                  مصنوعات کی فہرست دیکھیں
                </button>
              </div>
            ) : (
              <form onSubmit={handleFreezerApply} className="space-y-2.5 max-w-md mx-auto" dir="rtl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[9px] text-neutral-300 mb-1 font-medium">دکان کا نام (Shop Name)</label>
                    <input
                      type="text"
                      required
                      value={shopName}
                      onChange={(e) => setShopName(e.target.value)}
                      placeholder="مثلاً: مدینہ سپر اسٹور"
                      className="w-full bg-[#141B24] border border-[#252B36] focus:border-cyan-500 rounded px-2.5 py-1.5 text-[10px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] text-neutral-300 mb-1 font-medium">شہر / علاقہ (City / Area)</label>
                    <input
                      type="text"
                      required
                      value={shopCity}
                      onChange={(e) => setShopCity(e.target.value)}
                      placeholder="شاہپور / سرگودھا / لاہور"
                      className="w-full bg-[#141B24] border border-[#252B36] focus:border-cyan-500 rounded px-2.5 py-1.5 text-[10px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9px] text-neutral-300 mb-1 font-medium">رابطہ نمبر (WhatsApp / Phone)</label>
                  <input
                    type="tel"
                    required
                    value={shopPhone}
                    onChange={(e) => setShopPhone(e.target.value)}
                    placeholder="0300-1234567"
                    className="w-full bg-[#141B24] border border-[#252B36] focus:border-cyan-500 rounded px-2.5 py-1.5 text-[10px] text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
                    dir="ltr"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[8px] text-neutral-500 font-mono">Restricted to commercial shopkeepers</span>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-[10px] font-bold shadow-md shadow-cyan-600/30 transition-colors"
                  >
                    درخواست جمع کروائیں
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* VIEW 3: ADMIN INTERFACE */}
        {activeTab === 'admin' && (
          <div className="rounded-lg bg-[#0E131A] border border-purple-500/30 p-2.5 sm:p-3 space-y-2.5">
            <div className="flex items-center justify-between border-b border-[#252B36] pb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.2 rounded text-[8px] font-mono bg-purple-950/70 text-purple-300 border border-purple-500/30">
                  ADMIN PORTAL
                </span>
                <span className="text-xs font-bold text-white">BSF بزنس کنٹرول پینل</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('products')}
                className="text-[9px] text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-[#141B24] border border-[#252B36]"
              >
                اسٹور فرنٹ
              </button>
            </div>

            {/* KPI Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              <div className="bg-[#141B24] p-2 rounded border border-[#252B36]">
                <span className="text-[8px] font-mono text-neutral-400 block">ACTIVE RETAILERS</span>
                <span className="text-xs sm:text-sm font-bold text-amber-300">54 دکانیں</span>
              </div>
              <div className="bg-[#141B24] p-2 rounded border border-[#252B36]">
                <span className="text-[8px] font-mono text-neutral-400 block">FREEZERS ISSUED</span>
                <span className="text-xs sm:text-sm font-bold text-cyan-300">140+ فریزر</span>
              </div>
              <div className="bg-[#141B24] p-2 rounded border border-[#252B36]">
                <span className="text-[8px] font-mono text-neutral-400 block">TOTAL DAIRY SKUS</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-300">12 پروڈکٹس</span>
              </div>
              <div className="bg-[#141B24] p-2 rounded border border-[#252B36]">
                <span className="text-[8px] font-mono text-neutral-400 block">DISPATCH SLA</span>
                <span className="text-xs sm:text-sm font-bold text-indigo-300">99.4% On-Time</span>
              </div>
            </div>

            {/* Recent Retailer Registrations Table */}
            <div className="bg-[#121822] rounded border border-[#252B36] overflow-hidden text-[9px]">
              <div className="px-2.5 py-1.5 bg-[#161F2C] border-b border-[#252B36] text-[8px] font-mono text-neutral-400 uppercase flex justify-between">
                <span>Recent Retailer Applications</span>
                <span>Status</span>
              </div>
              <div className="divide-y divide-[#252B36]/60">
                <div className="px-2.5 py-1.5 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-neutral-200 block">مدینہ سپر اسٹور - شاہپور</span>
                    <span className="text-[8px] text-neutral-400">فون: 0302-XXXXXXX • درخواست: ڈیپ فریزر</span>
                  </div>
                  <span className="px-1.5 py-0.2 rounded text-[8px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                    DELIVERED ✓
                  </span>
                </div>
                <div className="px-2.5 py-1.5 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-neutral-200 block">بسم اللہ جنرل اسٹور - سرگودھا</span>
                    <span className="text-[8px] text-neutral-400">فون: 0311-XXXXXXX • درخواست: 200kg گھی</span>
                  </div>
                  <span className="px-1.5 py-0.2 rounded text-[8px] font-mono bg-amber-950/60 text-amber-300 border border-amber-500/30">
                    PENDING REVIEW
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 4: CONTACT & INQUIRY FLOW */}
        {activeTab === 'contact' && (
          <div className="rounded-lg bg-[#0E131A] border border-[#252B36] p-3 space-y-2.5" dir="rtl">
            <div className="flex items-center justify-between border-b border-[#252B36] pb-1.5">
              <h3 className="text-xs sm:text-sm font-bold text-white">رابطہ اور ہول سیل سپلائی انکوائری</h3>
              <button
                type="button"
                onClick={() => setActiveTab('products')}
                className="text-[9px] text-neutral-400 hover:text-white px-2 py-0.5 rounded bg-[#141B24] border border-[#252B36]"
              >
                ← واپس
              </button>
            </div>

            {contactSubmitted ? (
              <div className="p-3 rounded bg-emerald-950/40 border border-emerald-500/30 text-center space-y-1">
                <span className="text-xs font-bold text-emerald-300 block">شکریہ! آپ کا پیغام موصول ہو گیا ہے</span>
                <p className="text-[9px] text-neutral-400">ہماری ٹیم جلد آپ سے رابطہ کرے گی۔</p>
                <button
                  type="button"
                  onClick={() => { setContactSubmitted(false); setActiveTab('products'); }}
                  className="px-2.5 py-1 rounded bg-indigo-600 text-white text-[9px] font-medium mt-1"
                >
                  ہوم پر واپس جائیں
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-2 max-w-sm mx-auto">
                <div>
                  <label className="block text-[9px] text-neutral-300 mb-0.5">آپ کا نام</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="نام درج کریں"
                    className="w-full bg-[#141B24] border border-[#252B36] rounded px-2.5 py-1 text-[10px] text-neutral-200"
                  />
                </div>
                <div>
                  <label className="block text-[9px] text-neutral-300 mb-0.5">فون نمبر</label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="0300-XXXXXXX"
                    className="w-full bg-[#141B24] border border-[#252B36] rounded px-2.5 py-1 text-[10px] text-neutral-200"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-[9px] text-neutral-300 mb-0.5">پیغام / آرڈر کی تفصیل</label>
                  <textarea
                    rows="2"
                    value={contactMsg}
                    onChange={(e) => setContactMsg(e.target.value)}
                    placeholder="مثلاً: دیسی گھی اور قلفی کی ہول سیل قیمت کیا ہے؟"
                    className="w-full bg-[#141B24] border border-[#252B36] rounded px-2.5 py-1 text-[10px] text-neutral-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-1.5 rounded bg-amber-600 hover:bg-amber-500 text-white text-[10px] font-bold transition-colors"
                >
                  پیغام ارسال کریں
                </button>
              </form>
            )}
          </div>
        )}
      </div>

      {/* INTERACTIVE PRODUCT MODAL */}
      {selectedProduct && (
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm z-40 flex items-center justify-center p-3 animate-in fade-in">
          <div className="relative w-full max-w-sm bg-[#0E131A] border border-amber-500/40 rounded-xl p-3 sm:p-4 shadow-2xl space-y-2.5" dir="rtl">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2.5 left-2.5 p-1 rounded-md bg-[#141B24] border border-[#252B36] text-neutral-400 hover:text-white"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2.5 pr-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-2xl shrink-0">
                {selectedProduct.emoji}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white">
                  {selectedProduct.nameUrdu}
                </h3>
                <span className="text-[9px] text-amber-400 font-sans block" dir="ltr">
                  {selectedProduct.nameEng}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[10px] text-neutral-300 leading-relaxed bg-[#121822] p-2 rounded border border-[#252B36]/60">
              {selectedProduct.desc}
            </p>

            {/* Specifications */}
            <div className="space-y-1">
              <span className="text-[9px] font-bold text-neutral-400 block font-mono">اہم خصوصیات (Features):</span>
              <div className="grid grid-cols-1 gap-1">
                {selectedProduct.specs.map((s, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[9px] text-neutral-200">
                    <Check className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 pt-1 border-t border-[#252B36]/60">
              <button
                type="button"
                onClick={() => { setSelectedProduct(null); setActiveTab('freezer'); }}
                className="flex-1 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-[9px] sm:text-[10px] font-bold transition-all text-center"
              >
                فریزر اسکیم میں شامل کریں
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="px-3 py-1.5 rounded-lg bg-[#141B24] border border-[#252B36] text-neutral-300 text-[9px] font-medium hover:text-white"
              >
                بند کریں
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const RestaurantPosMockup = () => {
  const [orderType, setOrderType] = useState('dine-in'); // 'dine-in' | 'takeaway' | 'delivery'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTable] = useState('T-04');
  const [toastMessage, setToastMessage] = useState(null);
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Gourmet Beef Burger', category: 'fastfood', price: 850, qty: 2, kot: 'sent' },
    { id: 2, name: 'Chicken Tikka Pizza (L)', category: 'mains', price: 1450, qty: 1, kot: 'sent' },
    { id: 4, name: 'Mint Margarita', category: 'drinks', price: 320, qty: 2, kot: 'queued' }
  ]);

  const menuCatalog = [
    { id: 1, name: 'Gourmet Beef Burger', category: 'fastfood', price: 850, code: 'BF-01', tag: 'Chef Special' },
    { id: 2, name: 'Chicken Tikka Pizza (L)', category: 'mains', price: 1450, code: 'PZ-04', tag: 'Dine-In Fav' },
    { id: 3, name: 'Mutton Karahi (Full)', category: 'mains', price: 2600, code: 'MK-09', tag: 'Traditional' },
    { id: 4, name: 'Mint Margarita', category: 'drinks', price: 320, code: 'BV-02', tag: 'Chilled' },
    { id: 5, name: 'Crispy Zinger Meal', category: 'fastfood', price: 650, code: 'ZG-03', tag: 'Hot' },
    { id: 6, name: 'Desi Ghee Biryani', category: 'mains', price: 550, code: 'BR-11', tag: 'Fragrant' },
  ];

  const filteredMenu = selectedCategory === 'all' 
    ? menuCatalog 
    : menuCatalog.filter(item => item.category === selectedCategory);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAddItem = (item) => {
    setOrderItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { id: item.id, name: item.name, category: item.category, price: item.price, qty: 1, kot: 'queued' }];
    });
    showToast(`Added ${item.name} to ticket`);
  };

  const handleUpdateQty = (id, delta) => {
    setOrderItems(prev => {
      return prev
        .map(i => {
          if (i.id === id) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean);
    });
  };

  const handleSendKot = () => {
    const queuedCount = orderItems.filter(i => i.kot === 'queued').length;
    if (queuedCount === 0) {
      showToast('All items already dispatched to kitchen');
      return;
    }
    setOrderItems(prev => prev.map(i => ({ ...i, kot: 'sent' })));
    showToast(`KOT #104 dispatched (${queuedCount} new items sent to kitchen station)`);
  };

  const handleSettleBill = () => {
    if (orderItems.length === 0) {
      showToast('No items on active ticket');
      return;
    }
    showToast(`Payment settled (Cash) • Receipt printed • Z-Report updated`);
  };

  const subtotal = orderItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = Math.round(subtotal * 0.16);
  const discount = subtotal > 2000 ? 200 : 0;
  const grandTotal = subtotal + tax - discount;

  return (
    <div className="relative w-full h-full bg-[#080B10] text-xs font-sans select-none overflow-hidden flex flex-col">
      {/* Notification Toast */}
      {toastMessage && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-full bg-indigo-600/95 text-white font-mono text-[10px] sm:text-[11px] shadow-lg shadow-indigo-500/20 border border-indigo-400/40 flex items-center gap-1.5 animate-bounce">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="relative px-2.5 sm:px-3 py-1.5 border-b border-[#252B36]/80 bg-[#0C1017] flex items-center justify-between shrink-0 z-10">
        {/* Left: Brand & Station */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm">
            <Utensils className="w-3 h-3 text-white" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-[11px] sm:text-xs text-white tracking-tight">
              Retailspoint<span className="text-amber-400">POS</span>
            </span>
            <span className="hidden sm:inline font-mono text-[9px] text-[#98A1AF]">
              Station #01
            </span>
          </div>
        </div>

        {/* Center: Order Type Switcher */}
        <div className="flex items-center bg-[#141B24] p-0.5 rounded-lg border border-[#252B36]">
          {[
            { id: 'dine-in', label: 'Dine-In (T-04)' },
            { id: 'takeaway', label: 'Takeaway' },
            { id: 'delivery', label: 'Delivery' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setOrderType(tab.id);
                showToast(`Switched mode to ${tab.label}`);
              }}
              className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-medium transition-colors ${
                orderType === tab.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Offline SQLite Badge */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-mono text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden md:inline">SQLite Local: Active</span>
            <span className="md:hidden">Offline Sync</span>
          </div>
        </div>
      </div>

      {/* Main 2-Column POS Workspace */}
      <div className="flex-1 min-h-0 flex gap-2 p-2 sm:p-2.5 overflow-hidden">
        {/* Left Column: Menu Catalog (60%) */}
        <div className="flex-[1.2] min-w-0 flex flex-col justify-between overflow-hidden">
          {/* Category Pills & Hint */}
          <div className="flex items-center justify-between gap-1 pb-1.5 border-b border-[#252B36]/60">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              {[
                { id: 'all', label: 'All' },
                { id: 'mains', label: 'Mains' },
                { id: 'fastfood', label: 'Fast Food' },
                { id: 'drinks', label: 'Drinks' }
              ].map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2 py-0.5 rounded text-[9px] font-mono transition-colors shrink-0 ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                      : 'bg-[#12161F] text-neutral-400 hover:text-neutral-200 border border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <span className="text-[9px] font-mono text-neutral-500 hidden sm:inline shrink-0">
              Click item to add
            </span>
          </div>

          {/* Menu Cards Grid */}
          <div className="grid grid-cols-2 gap-1.5 pt-1.5 flex-1 overflow-y-auto no-scrollbar content-start">
            {filteredMenu.map(item => (
              <div
                key={item.id}
                onClick={() => handleAddItem(item)}
                className="p-1.5 sm:p-2 rounded-lg bg-[#0F141C] hover:bg-[#151D28] border border-[#252B36] hover:border-indigo-500/40 transition-all cursor-pointer flex flex-col justify-between group/item"
              >
                <div>
                  <div className="flex items-center justify-between text-[8px] font-mono text-neutral-500 mb-0.5">
                    <span>{item.code}</span>
                    <span className="text-amber-400/90 text-[7.5px] truncate max-w-[65px]">{item.tag}</span>
                  </div>
                  <h5 className="font-semibold text-neutral-200 text-[10px] sm:text-[11px] leading-tight line-clamp-1 group-hover/item:text-indigo-300">
                    {item.name}
                  </h5>
                </div>
                <div className="flex items-center justify-between mt-1 pt-1 border-t border-[#252B36]/40">
                  <span className="font-mono font-bold text-[10px] text-emerald-400">
                    Rs. {item.price.toLocaleString()}
                  </span>
                  <span className="w-4 h-4 rounded bg-indigo-600/30 group-hover/item:bg-indigo-600 text-indigo-300 group-hover/item:text-white flex items-center justify-center transition-colors">
                    <Plus className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Active Order Ticket & KOT Actions (40%) */}
        <div className="flex-1 min-w-[145px] sm:min-w-[185px] bg-[#0C1017] rounded-lg border border-[#252B36] p-2 flex flex-col justify-between overflow-hidden">
          {/* Ticket Header */}
          <div className="flex items-center justify-between pb-1.5 border-b border-[#252B36]/60 shrink-0">
            <div className="flex items-center gap-1 min-w-0">
              <Receipt className="w-3 h-3 text-indigo-400 shrink-0" />
              <span className="font-mono text-[9px] sm:text-[10px] text-neutral-200 font-bold truncate">
                Order #RP-4092
              </span>
            </div>
            <span className="font-mono text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-500/20 shrink-0">
              {orderType === 'dine-in' ? activeTable : orderType.toUpperCase()}
            </span>
          </div>

          {/* Ticket Items List */}
          <div className="flex-1 overflow-y-auto no-scrollbar space-y-1.5 py-1.5">
            {orderItems.length === 0 ? (
              <div className="h-full flex items-center justify-center text-[9px] font-mono text-neutral-500 text-center p-2">
                Ticket is empty. Click items on the left to add.
              </div>
            ) : (
              orderItems.map(item => (
                <div key={item.id} className="flex items-center justify-between text-[9px] sm:text-[10px] bg-[#111620] px-1.5 py-1 rounded border border-[#252B36]/40">
                  <div className="min-w-0 flex-1 pr-1">
                    <div className="text-neutral-200 truncate font-medium">{item.name}</div>
                    <div className="flex items-center gap-1 font-mono text-[8px] text-neutral-400">
                      <span>Rs. {item.price}</span>
                      <span className={`px-1 py-0.2 rounded text-[7px] ${
                        item.kot === 'sent' 
                          ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-amber-950/60 text-amber-400 border border-amber-500/20'
                      }`}>
                        {item.kot === 'sent' ? 'KOT Sent' : 'Queued'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleUpdateQty(item.id, -1); }}
                      className="w-4 h-4 rounded bg-[#1A2230] hover:bg-neutral-700 text-neutral-300 flex items-center justify-center"
                    >
                      <Minus className="w-2.5 h-2.5" />
                    </button>
                    <span className="font-mono font-bold text-neutral-200 text-[10px] w-3 text-center">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); handleUpdateQty(item.id, 1); }}
                      className="w-4 h-4 rounded bg-[#1A2230] hover:bg-neutral-700 text-neutral-300 flex items-center justify-center"
                    >
                      <Plus className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bill Computation & CTAs */}
          <div className="pt-1.5 border-t border-[#252B36]/70 shrink-0 space-y-1.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400">
              <span>Subtotal:</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-white">
              <span className="text-indigo-400">Total:</span>
              <span className="text-emerald-400">Rs. {grandTotal.toLocaleString()}</span>
            </div>

            {/* Action Buttons: Send KOT & Settle */}
            <div className="grid grid-cols-2 gap-1 pt-0.5">
              <button
                type="button"
                onClick={handleSendKot}
                className="flex items-center justify-center gap-1 py-1 px-1.5 rounded bg-amber-600/90 hover:bg-amber-500 text-white font-semibold text-[8px] sm:text-[9px] transition-colors shadow-sm"
              >
                <Printer className="w-2.5 h-2.5" />
                <span>Send KOT</span>
              </button>
              <button
                type="button"
                onClick={handleSettleBill}
                className="flex items-center justify-center gap-1 py-1 px-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[8px] sm:text-[9px] transition-colors shadow-sm"
              >
                <CreditCard className="w-2.5 h-2.5" />
                <span>Pay & Print</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="px-2.5 py-1 bg-[#090C11] border-t border-[#252B36]/70 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-neutral-400 shrink-0">
        <span className="truncate">
          Engine: <span className="text-neutral-300">retailspoint.sqlite</span> • Shift #12
        </span>
        <span className="text-indigo-400 truncate ml-2">
          Muhammad Sarfaraz × Hasan Tariq
        </span>
      </div>
    </div>
  );
};

const PrimeLinksMockup = () => {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'services' | 'contact'
  const [activeService, setActiveService] = useState('connectivity');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const services = [
    {
      id: 'connectivity',
      title: 'Enterprise Connectivity',
      desc: 'High-speed business network integration, dedicated communication pipelines, and secure infrastructure.',
      metric: '99.98% Uptime',
      tag: 'Core Solution'
    },
    {
      id: 'consulting',
      title: 'Strategic Consulting',
      desc: 'Operational workflow planning, digital market positioning, and tech-driven efficiency roadmaps.',
      metric: '10x Agility',
      tag: 'Advisory'
    },
    {
      id: 'digital',
      title: 'Digital Platform Presence',
      desc: 'Modern responsive web storefronts, branded corporate identity, and client inquiry channels.',
      metric: 'Sub-1s Load',
      tag: 'Web & Brand'
    }
  ];

  const handleSendInquiry = (e) => {
    e.preventDefault();
    if (!inquiryName.trim()) {
      showToast('Please enter your name');
      return;
    }
    showToast(`Inquiry from "${inquiryName.trim()}" dispatched to PrimeLinks (Client: Nasir)`);
    setInquiryName('');
    setInquiryMessage('');
    setActiveTab('overview');
  };

  return (
    <div className="relative w-full h-full bg-[#080B10] text-xs font-sans select-none overflow-hidden flex flex-col">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 px-3 py-1.5 rounded-full bg-cyan-600/95 text-white font-mono text-[10px] sm:text-[11px] shadow-lg shadow-cyan-500/20 border border-cyan-400/40 flex items-center gap-1.5 animate-bounce">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-200 shrink-0" />
          <span className="truncate max-w-[280px] sm:max-w-none">{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <div className="relative px-2.5 sm:px-3.5 py-1.5 border-b border-[#252B36]/80 bg-[#0C1017] flex items-center justify-between shrink-0 z-10">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-[10px] shadow-sm">
            <Globe className="w-3 h-3 text-white" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-bold text-[11px] sm:text-xs text-white tracking-tight">
              Prime<span className="text-cyan-400">Links</span>
            </span>
            <span className="hidden sm:inline font-mono text-[9px] text-[#98A1AF]">
              Business Portal
            </span>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <div className="flex items-center bg-[#141B24] p-0.5 rounded-lg border border-[#252B36]">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'services', label: 'Services' },
            { id: 'contact', label: 'Inquire' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Client Badge */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-[9px]">
            <Building2 className="w-2.5 h-2.5 text-cyan-400" />
            <span className="hidden xs:inline">Client: Nasir</span>
            <span className="xs:hidden">Nasir</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-h-0 p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between">
        {activeTab === 'overview' && (
          <div className="flex flex-col h-full justify-between space-y-2">
            {/* Hero Banner */}
            <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-[#0E1522] via-[#0E131C] to-[#0A0D14] border border-cyan-500/30 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[8.5px] sm:text-[9.5px] font-mono text-cyan-400 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>EMPOWERING MODERN ENTERPRISES</span>
                </div>
                <h4 className="text-[12px] sm:text-[13px] font-bold text-white tracking-tight leading-tight">
                  Accelerating Business Growth & Connectivity
                </h4>
                <p className="text-[9px] sm:text-[10px] text-neutral-300 mt-1 line-clamp-2 leading-relaxed">
                  Dedicated digital presence establishing market authority, clear service communication, and seamless client discovery.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white text-[9px] font-semibold shrink-0 shadow-sm transition-colors"
              >
                <span>Consultation</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-3 gap-1.5 flex-1 content-stretch">
              {services.map(srv => (
                <div
                  key={srv.id}
                  onClick={() => {
                    setActiveService(srv.id);
                    setActiveTab('services');
                  }}
                  className="p-1.5 sm:p-2 rounded-lg bg-[#0E131A] hover:bg-[#131A24] border border-[#252B36] hover:border-cyan-500/40 cursor-pointer transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[7.5px] sm:text-[8px] font-mono text-neutral-400 mb-0.5">
                      <span className="text-cyan-400 font-semibold">{srv.tag}</span>
                      <span className="text-emerald-400">{srv.metric}</span>
                    </div>
                    <h5 className="font-semibold text-neutral-200 text-[9.5px] sm:text-[10px] leading-tight line-clamp-1 group-hover:text-cyan-300">
                      {srv.title}
                    </h5>
                    <p className="text-[8px] sm:text-[9px] text-neutral-400 mt-1 line-clamp-2 leading-snug">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="mt-1 pt-1 border-t border-[#252B36]/50 flex items-center justify-between text-[8px] font-mono text-cyan-400">
                    <span>Explore</span>
                    <ArrowUpRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="flex flex-col h-full justify-between space-y-2">
            <div className="flex items-center justify-between pb-1 border-b border-[#252B36]/60">
              <span className="text-[10px] font-mono text-neutral-300 font-semibold">
                Service Capabilities Catalog
              </span>
              <span className="text-[8.5px] font-mono text-cyan-400">
                Client Focus: Nasir
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 flex-1">
              {services.map(srv => {
                const isSelected = activeService === srv.id;
                return (
                  <div
                    key={srv.id}
                    onClick={() => setActiveService(srv.id)}
                    className={`p-2 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#111A26] border-cyan-500/60 shadow-sm'
                        : 'bg-[#0E131A] border-[#252B36] hover:border-neutral-600'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[8px] font-mono mb-1">
                        <span className="px-1.5 py-0.2 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                          {srv.tag}
                        </span>
                        <span className="text-emerald-400">{srv.metric}</span>
                      </div>
                      <h5 className="font-bold text-neutral-200 text-[10px] sm:text-[11px]">
                        {srv.title}
                      </h5>
                      <p className="text-[8.5px] sm:text-[9px] text-neutral-300 mt-1 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        showToast(`Selected "${srv.title}" for consultation`);
                        setActiveTab('contact');
                      }}
                      className="mt-2 w-full py-1 rounded bg-cyan-600/30 hover:bg-cyan-600 text-cyan-300 hover:text-white text-[8px] font-mono font-medium transition-colors text-center"
                    >
                      Request Proposal ➔
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <form onSubmit={handleSendInquiry} className="flex flex-col h-full justify-between bg-[#0E131A] p-2.5 rounded-lg border border-[#252B36]">
            <div>
              <div className="flex items-center justify-between pb-1.5 border-b border-[#252B36]/60 mb-2">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-neutral-200">
                    Direct Client Inquiry - PrimeLinks
                  </span>
                </div>
                <span className="text-[8.5px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Online
                </span>
              </div>
              <div className="space-y-1.5">
                <div>
                  <label className="text-[8.5px] font-mono text-neutral-400 block mb-0.5">Your Name / Organization</label>
                  <input
                    type="text"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Tariq Enterprise"
                    className="w-full bg-[#141B24] border border-[#252B36] rounded px-2 py-1 text-[9.5px] text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="text-[8.5px] font-mono text-neutral-400 block mb-0.5">Inquiry Details / Service Needed</label>
                  <input
                    type="text"
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Describe your connectivity or business website requirements..."
                    className="w-full bg-[#141B24] border border-[#252B36] rounded px-2 py-1 text-[9.5px] text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-[#252B36]/60 mt-1">
              <span className="text-[8px] font-mono text-neutral-400">
                Routed to: Nasir (PrimeLinks)
              </span>
              <button
                type="submit"
                className="flex items-center gap-1 px-3 py-1 rounded bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-[9px] transition-colors"
              >
                <Send className="w-2.5 h-2.5" />
                <span>Submit Inquiry</span>
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Footer Bar */}
      <div className="px-2.5 py-1 bg-[#090C11] border-t border-[#252B36]/70 flex items-center justify-between text-[8px] sm:text-[9px] font-mono text-neutral-400 shrink-0">
        <span className="truncate">
          Project: <span className="text-neutral-300">PrimeLinks</span> • Client: <span className="text-cyan-400">Nasir</span>
        </span>
        <span className="text-indigo-400 truncate ml-2">
          Developed by Muhammad Sarfaraz
        </span>
      </div>
    </div>
  );
};

export const ProjectMockup = ({ type }) => {
  if (type === 'primelinks' || type === 'business-web') {
    return <PrimeLinksMockup />;
  }

  if (type === 'pos' || type === 'retailspoint') {
    return <RestaurantPosMockup />;
  }

  if (type === 'social') {
    return <SocialFeedMockup />;
  }

  if (type === 'food-business' || type === 'support') {
    return <UrduFoodBusinessMockup />;
  }

  if (type === 'kanban') {
    return (
      <div className="w-full h-full bg-[#090C10] p-3 sm:p-4 text-xs font-sans select-none overflow-hidden flex flex-col">
        {/* Top Mini Bar */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#252B36]/60 mb-2.5 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-indigo-500 shrink-0" />
            <span className="font-semibold text-neutral-200 text-[11px] sm:text-xs truncate">Pipeline Board</span>
            <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-indigo-950/60 text-indigo-400 border border-indigo-500/20 shrink-0">
              24 Leads
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            <span className="text-[9px] sm:text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span> 68% Conv. Rate
            </span>
          </div>
        </div>

        {/* Columns Grid - Responsive Horizontal Scroll on Mobile, 3-Columns on Desktop */}
        <div className="flex overflow-x-auto snap-x no-scrollbar gap-2 sm:grid sm:grid-cols-3 sm:gap-2.5 flex-1 pb-1">
          {/* Column 1: Applied */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 snap-start bg-[#0E131A] rounded-lg p-2 sm:p-2.5 border border-[#252B36]/50 flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-neutral-400">
              <span>Applied (12)</span>
              <span className="w-2 h-2 rounded-full bg-blue-400/80 shrink-0"></span>
            </div>
            <div className="bg-[#151B24] p-2 rounded border border-[#252B36] shadow-sm">
              <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-neutral-200">
                <span className="truncate">Frontend Engineer</span>
                <span className="text-[9px] font-mono text-indigo-400 shrink-0 font-normal">$140k</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-1 truncate">Stripe • Remote</p>
              <div className="mt-1.5 sm:mt-2 flex items-center justify-between text-[8px] sm:text-[9px] text-neutral-500">
                <span className="truncate mr-1">Tailored Resume v3</span>
                <span className="text-blue-400 shrink-0">2d ago</span>
              </div>
            </div>
            <div className="bg-[#151B24] p-2 rounded border border-[#252B36] opacity-75">
              <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-neutral-200">
                <span className="truncate">Full-Stack Dev</span>
                <span className="text-[9px] font-mono text-indigo-400 shrink-0 font-normal">$130k</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-neutral-400 mt-1 truncate">Vercel • Hybrid</p>
            </div>
          </div>

          {/* Column 2: Technical Interview */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 snap-start bg-[#0E131A] rounded-lg p-2 sm:p-2.5 border border-indigo-500/30 flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-indigo-300">
              <span>Technical (4)</span>
              <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
            </div>
            <div className="bg-[#151B24] p-2 rounded border border-indigo-500/50 shadow-md">
              <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-neutral-100">
                <span className="truncate">MERN Architect</span>
                <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-indigo-500/20 text-indigo-300 shrink-0">STAGE 2</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-neutral-300 mt-1 truncate">Systems Limited</p>
              <div className="mt-1.5 sm:mt-2 flex items-center gap-1.5 text-[8px] sm:text-[9px] text-amber-300 font-mono">
                <Clock className="w-3 h-3 shrink-0" />
                <span className="truncate">System Design Prep</span>
              </div>
            </div>
          </div>

          {/* Column 3: Offer Received */}
          <div className="min-w-[145px] sm:min-w-0 flex-1 snap-start bg-[#0E131A] rounded-lg p-2 sm:p-2.5 border border-emerald-500/30 flex flex-col gap-1.5 sm:gap-2">
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-medium text-emerald-300">
              <span>Offer Stage (2)</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
            </div>
            <div className="bg-[#151B24] p-2 rounded border border-emerald-500/40 shadow-sm">
              <div className="flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-200">
                <span className="truncate">Senior Full-Stack</span>
                <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              </div>
              <p className="text-[9px] sm:text-[10px] text-neutral-300 mt-1 truncate">SaaS Scaleup</p>
              <div className="mt-1.5 sm:mt-2 text-[8px] sm:text-[9px] font-mono text-emerald-400 bg-emerald-950/50 px-1 py-0.5 rounded inline-block">
                Signed & Accepted
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'support') {
    return (
      <div className="w-full h-full bg-[#090C10] p-3 sm:p-4 text-xs font-sans select-none overflow-hidden flex flex-col">
        {/* Top Stats */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#252B36]/60 mb-2.5 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="font-semibold text-neutral-200 text-xs truncate">Omnichannel Copilot</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-purple-950/60 text-purple-300 border border-purple-500/20 shrink-0">
              GPT-4o Stream
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 flex items-center gap-1 shrink-0 ml-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span> SLA: 99.4%
          </span>
        </div>

        {/* Split View */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 flex-1 overflow-hidden">
          {/* Left Ticket List (Hidden on mobile to prioritize AI copilot, visible on sm:) */}
          <div className="hidden sm:flex sm:col-span-5 bg-[#0E131A] rounded-lg p-2 border border-[#252B36]/50 flex-col gap-1.5">
            <div className="bg-[#151B24] p-2 rounded border-l-2 border-l-purple-500 border-t border-r border-b border-[#252B36]">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-mono text-neutral-400">#TK-8941</span>
                <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-rose-950/60 text-rose-300">URGENT</span>
              </div>
              <p className="font-semibold text-[11px] text-neutral-200 mt-1 truncate">Webhook timeout error</p>
              <span className="text-[9px] text-neutral-400">Sent 4m ago</span>
            </div>

            <div className="bg-[#111620] p-2 rounded border border-[#252B36]/60 opacity-80">
              <div className="flex items-center justify-between text-[10px]">
                <span className="font-mono text-neutral-400">#TK-8940</span>
                <span className="px-1 py-0.2 rounded text-[8px] font-mono bg-blue-950/60 text-blue-300">MEDIUM</span>
              </div>
              <p className="font-semibold text-[11px] text-neutral-300 mt-1 truncate">Subscription upgrade inquiry</p>
            </div>
          </div>

          {/* Right Ticket Detail & AI Suggestion */}
          <div className="col-span-1 sm:col-span-7 bg-[#0E131A] rounded-lg p-2.5 sm:p-3 border border-[#252B36]/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-neutral-400 pb-1.5 border-b border-[#252B36]/40">
                <span className="truncate mr-2">Customer: engineering@acme.com</span>
                <span className="text-emerald-400 shrink-0">Verified</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-neutral-300 mt-1.5 sm:mt-2 leading-relaxed line-clamp-2">
                "Our production payload delivery is failing with HTTP 504. Is the API gateway rate limiting our IP range?"
              </p>
            </div>

            {/* AI Generated Draft Box */}
            <div className="bg-[#131923] p-2 sm:p-2.5 rounded-lg border border-purple-500/40 mt-1.5">
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-purple-300 mb-1">
                <span className="flex items-center gap-1 font-mono">
                  <Sparkles className="w-3 h-3 text-purple-400 shrink-0" /> AI Suggested Resolution
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono text-neutral-400">96% match</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-neutral-300 leading-snug line-clamp-2">
                "We reviewed egress cluster logs; timeout stemmed from unacknowledged payloads. Review exponential backoff docs."
              </p>
              <div className="mt-1.5 flex items-center justify-end">
                <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-medium bg-purple-600 text-white hover:bg-purple-500 transition-colors cursor-pointer">
                  Approve & Dispatch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'inventory') {
    return (
      <div className="w-full h-full bg-[#090C10] p-3 sm:p-4 text-xs font-sans select-none overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#252B36]/60 mb-2.5 sm:mb-3">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Layers className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="font-semibold text-neutral-200 text-xs truncate">Multi-Warehouse Inventory</span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30 shrink-0 ml-2">
            $428,950
          </span>
        </div>

        {/* Ledger Table */}
        <div className="bg-[#0E131A] rounded-lg border border-[#252B36]/60 p-2 sm:p-2.5 flex-1 flex flex-col justify-between overflow-hidden">
          <table className="w-full text-left text-[10px] sm:text-[11px]">
            <thead>
              <tr className="text-neutral-500 font-mono text-[8px] sm:text-[9px] border-b border-[#252B36]/60 pb-1">
                <th className="pb-1.5">SKU</th>
                <th className="pb-1.5">PRODUCT</th>
                <th className="pb-1.5 hidden sm:table-cell">LOCATION</th>
                <th className="pb-1.5">AVAILABLE</th>
                <th className="pb-1.5 text-right">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252B36]/40 text-neutral-300 text-[9px] sm:text-[10px]">
              <tr>
                <td className="py-1.5 sm:py-2 font-mono text-neutral-400">SKU-9901</td>
                <td className="py-1.5 sm:py-2 font-medium text-neutral-200 truncate max-w-[100px] sm:max-w-none">Precision Router</td>
                <td className="py-1.5 sm:py-2 text-neutral-400 hidden sm:table-cell">Dallas-A</td>
                <td className="py-1.5 sm:py-2 font-mono text-emerald-400">142 units</td>
                <td className="py-1.5 sm:py-2 text-right">
                  <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-emerald-950/60 text-emerald-300">IN STOCK</span>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 sm:py-2 font-mono text-neutral-400">SKU-9902</td>
                <td className="py-1.5 sm:py-2 font-medium text-neutral-200 truncate max-w-[100px] sm:max-w-none">Fiber Transceiver</td>
                <td className="py-1.5 sm:py-2 text-neutral-400 hidden sm:table-cell">London-B</td>
                <td className="py-1.5 sm:py-2 font-mono text-amber-400">18 units</td>
                <td className="py-1.5 sm:py-2 text-right">
                  <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-950/60 text-amber-300">LOW</span>
                </td>
              </tr>
              <tr>
                <td className="py-1.5 sm:py-2 font-mono text-neutral-400">SKU-9903</td>
                <td className="py-1.5 sm:py-2 font-medium text-neutral-200 truncate max-w-[100px] sm:max-w-none">PoE Switch 48P</td>
                <td className="py-1.5 sm:py-2 text-neutral-400 hidden sm:table-cell">Chicago-C</td>
                <td className="py-1.5 sm:py-2 font-mono text-rose-400">0 units</td>
                <td className="py-1.5 sm:py-2 text-right">
                  <span className="px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-rose-950/60 text-rose-300">BACKORDER</span>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Bottom Alert Bar */}
          <div className="bg-[#141B24] p-1.5 sm:p-2 rounded flex items-center justify-between border border-[#252B36] text-[9px] sm:text-[10px] mt-1">
            <span className="text-neutral-400 font-mono flex items-center gap-1.5 min-w-0">
              <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">Auto PO #4812 queued</span>
            </span>
            <span className="text-indigo-400 font-mono text-[8px] sm:text-[9px] shrink-0 ml-2">ACID Safe</span>
          </div>
        </div>
      </div>
    );
  }

  // Default System Blueprint Mockup
  return (
    <div className="w-full h-full bg-[#090C10] p-4 sm:p-6 text-xs font-mono select-none flex flex-col items-center justify-center border-2 border-dashed border-[#252B36] rounded-lg">
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-950/50 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2 sm:mb-3">
        <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <h4 className="font-sans font-bold text-xs sm:text-sm text-neutral-200 mb-1">Architecture Blueprint Preview</h4>
      <p className="text-[10px] sm:text-[11px] text-neutral-400 text-center max-w-xs mb-2 sm:mb-3 font-sans">
        Production full-stack architecture with modular components, reactive state, and cloud integration.
      </p>
      <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-indigo-400">
        <Database className="w-3 h-3 shrink-0" />
        <span>Full-Stack Architecture Configured</span>
      </div>
    </div>
  );
};
