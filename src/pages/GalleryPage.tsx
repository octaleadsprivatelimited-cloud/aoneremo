import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Play } from 'lucide-react';
import { BRAND } from '@/config/brand';

// Generate image paths for all gallery images
const generateGalleryImages = () => {
  const images = [];
  for (let i = 1; i <= 64; i++) {
    images.push(`/gallery/gallery-${i}.jpeg`);
  }
  return images;
};

const galleryImages = generateGalleryImages();

// YouTube Shorts video IDs
const youtubeVideos = [
  { id: 'fPxcQiX6hYQ', title: 'Project Video 1' },
  { id: 'onCYEqnGcFg', title: 'Project Video 2' },
  { id: 'YavD5xs-nys', title: 'Project Video 3' },
  { id: '4n61epX8BVY', title: 'Project Video 4' },
  { id: 'RHPqOBNICOA', title: 'Project Video 5' },
  { id: 'iV4KmrzLTv0', title: 'Project Video 6' },
  { id: 'U_8w6cWYE-U', title: 'Project Video 7' },
  { id: 'qjmMLjZvJ8Y', title: 'Project Video 8' },
  { id: 'BBtqs7SOHvM', title: 'Project Video 9' },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const getVideoThumbnail = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  return (
    <MainLayout>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our stunning portfolio of renovation and interior design projects across {BRAND.CITY}.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">Project Videos</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Watch our latest renovation and interior design projects in action
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-black"
                onClick={() => setSelectedVideo(video.id)}
              >
                <img
                  src={getVideoThumbnail(video.id)}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to default thumbnail if maxresdefault doesn't exist
                    (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-center">Project Photos</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Browse through our completed renovation and interior design projects
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Hide broken images
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-transparent border-none">
          <div className="relative">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery view"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-md w-full p-0 bg-transparent border-none">
          <div className="relative">
            {selectedVideo && (
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                />
              </div>
            )}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}

