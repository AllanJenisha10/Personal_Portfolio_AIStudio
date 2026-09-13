import profileAsset from '../assets/allan_jenisha_profile.jpg';

// Fixed permanent local project asset
export const PERMANENT_PROFILE_PHOTO = profileAsset || '/assets/allan_jenisha_profile.jpg';
export const DEFAULT_PHOTO_PATH = PERMANENT_PROFILE_PHOTO;

// Clean up any legacy localStorage entry
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('allan_jenisha_custom_photo');
  } catch {
    // Ignore restricted environments
  }
}

export function getProfilePhoto(): string {
  return PERMANENT_PROFILE_PHOTO;
}

export async function saveProfilePhoto(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dataUrl = reader.result as string;
        window.dispatchEvent(new CustomEvent('profile-photo-changed', { detail: dataUrl }));

        try {
          await fetch('/api/upload-photo', {
            method: 'POST',
            body: file,
          });
        } catch {
          // Fallback
        }

        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(new Error('Failed to read photo file'));
    reader.readAsDataURL(file);
  });
}

export function resetProfilePhoto(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('allan_jenisha_custom_photo');
    window.dispatchEvent(new CustomEvent('profile-photo-changed', { detail: PERMANENT_PROFILE_PHOTO }));
  }
}

