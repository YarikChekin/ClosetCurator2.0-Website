export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/10 to-muted flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6 py-20">
          <h1 className="text-6xl font-bold text-secondary leading-tight">
            Closet Curator
          </h1>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto">
            Transform your wardrobe with AI. Photograph, tag, and combine your clothes into perfect outfits.
          </p>
          <div className="space-y-4">
            <button className="bg-primary text-accent px-8 py-3 rounded-lg font-semibold tracking-wide uppercase hover:scale-105 transition-transform duration-150">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
