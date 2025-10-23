'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAdminSession, clearAdminSession } from '@/lib/auth'
import Link from 'next/link'
import { 
  User, 
  GraduationCap, 
  FolderOpen, 
  Briefcase, 
  Award, 
  LogOut,
  Plus,
  Edit,
  Trash2,
  Zap
} from 'lucide-react'
import { supabase, About, Education, Project, Experience, Certificate, Skill } from '@/lib/supabase'
import AdminForm from '@/components/AdminForm'

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('about')
  const [data, setData] = useState<any[]>([])
  const [editingItem, setEditingItem] = useState<any>(null)
  const [showForm, setShowForm] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isAuth = getAdminSession()
    if (!isAuth) {
      router.push('/admin/login')
    } else {
      setAuthenticated(true)
      loadData()
    }
    setLoading(false)
  }, [router])

  const loadData = async () => {
    try {
      let tableName = ''
      switch (activeTab) {
        case 'about':
          tableName = 'about'
          break
        case 'education':
          tableName = 'education'
          break
        case 'projects':
          tableName = 'projects'
          break
        case 'experience':
          tableName = 'experience'
          break
        case 'certificates':
          tableName = 'certificates'
          break
        case 'skills':
          tableName = 'skills'
          break
      }

      const { data: result, error } = await supabase
        .from(tableName)
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      console.log(`Loaded ${activeTab} data:`, result)
      setData(result || [])
    } catch (error) {
      console.error('Error loading data:', error)
    }
  }

  useEffect(() => {
    if (authenticated) {
      loadData()
    }
  }, [activeTab, authenticated])

  const handleLogout = () => {
    clearAdminSession()
    router.push('/admin/login')
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return

    try {
      let tableName = ''
      switch (activeTab) {
        case 'about':
          tableName = 'about'
          break
        case 'education':
          tableName = 'education'
          break
        case 'projects':
          tableName = 'projects'
          break
        case 'experience':
          tableName = 'experience'
          break
        case 'certificates':
          tableName = 'certificates'
          break
        case 'skills':
          tableName = 'skills'
          break
      }

      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id)

      if (error) throw error
      loadData()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">Portfolio Admin</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'about', label: 'About', icon: User },
              { id: 'education', label: 'Education', icon: GraduationCap },
              { id: 'projects', label: 'Projects', icon: FolderOpen },
              { id: 'experience', label: 'Experience', icon: Briefcase },
              { id: 'certificates', label: 'Certificates', icon: Award },
              { id: 'skills', label: 'Skills', icon: Zap },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === tab.id
                      ? 'bg-indigo-100 text-indigo-700'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900 capitalize">
                {activeTab} Management
              </h2>
              <button
                onClick={() => {
                  setEditingItem(null)
                  setShowForm(true)
                }}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                <Plus className="h-5 w-5" />
                Add New
              </button>
            </div>
          </div>

          <div className="p-6">
            {data.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No {activeTab} data found. Click "Add New" to get started.
              </div>
            ) : (
              <div className="space-y-4">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex-1">
                      {activeTab === 'about' && (
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      )}
                      {activeTab === 'education' && (
                        <div>
                          <h3 className="font-medium">{item.institution}</h3>
                          <p className="text-sm text-gray-600">
                            {item.start_date} - {item.end_date || 'Present'}
                            {item.gpa && ` • GPA: ${item.gpa}`}
                          </p>
                        </div>
                      )}
                      {activeTab === 'projects' && (
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      )}
                      {activeTab === 'experience' && (
                        <div>
                          <h3 className="font-medium">{item.position} at {item.company}</h3>
                          <p className="text-sm text-gray-600">
                            {item.start_date} - {item.end_date || 'Present'}
                          </p>
                        </div>
                      )}
                      {activeTab === 'certificates' && (
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      )}
                      {activeTab === 'skills' && (
                        <div>
                          <h3 className="font-medium">{item.name || 'Untitled Skill'}</h3>
                          <p className="text-sm text-gray-600">
                            {item.type ? item.type.charAt(0).toUpperCase() + item.type.slice(1) : 'Unknown'} Skill • Level {item.level || 1}/5
                          </p>
                          {item.description && (
                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingItem(item)
                          setShowForm(true)
                        }}
                        className="p-2 text-indigo-600 hover:text-indigo-700"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="p-2 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Admin Form Modal */}
      <AdminForm
        isOpen={showForm}
        onClose={() => {
          setShowForm(false)
          setEditingItem(null)
        }}
        item={editingItem}
        type={activeTab}
        onSuccess={loadData}
      />
    </div>
  )
}
