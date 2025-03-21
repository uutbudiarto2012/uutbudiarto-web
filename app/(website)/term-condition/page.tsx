import PageContainer from '@/components/containers/page-container'
import React from 'react'

export default function TermPage() {
  return (
    <PageContainer title='Terms and Conditions'>
      <div className="min-h-screen max-w-3xl mx-auto px-3">
        <article className='prose prose-slate sm:prose-sm md:prose-base !text-slate-300'>
          <div>
            <h2>Introduction</h2>
            <p>
              Welcome to <b>uutbudiarto.com</b> These Terms and Conditions govern your use of our website. By accessing and using this website, you agree to comply with these terms. If you do not agree, please refrain from using our website.
            </p>
          </div>
          <div>
            <h2>User Conduct</h2>
            <div>
              <p>By using this website, you agree not to:</p>
              <ul>
                <li>Engage in any activity that violates laws or regulations.</li>
                <li>Attempt to gain unauthorized access to our website or servers.</li>
                <li>Post harmful, defamatory, or misleading content.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Blog and Articles</h2>
            <div>
              <p>
                The blog and articles published on this website are for informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of the information provided. The views expressed in blog posts are those of the respective authors and do not necessarily reflect our opinions.
              </p>
            </div>
          </div>
          <div>
            <h2>External Links</h2>
            <div>
              <p>
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any linked sites.
              </p>
            </div>
          </div>
          <div>
            <h2>Limitation of Liability</h2>
            <div>
              <p>
                We are not liable for any direct, indirect, or consequential damages arising from the use of this website. Your use of the website is at your own risk.
              </p>
            </div>
          </div>
          <div>
            <h2>Contact Information</h2>
            <div>
              <p>
                If you have any questions regarding these Terms and Conditions, please contact us at jawaskrip@gmail.com.
              </p>
            </div>
          </div>
        </article>
      </div>
    </PageContainer>
  )
}
